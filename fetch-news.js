/* =========================================================
   BOLAKILAS — FETCH BERITA BOLA (dari bola.net)
   =========================================================
   Mengambil berita terbaru kategori "Berita Sepak Bola" dari
   bola.net dengan mengambil (scraping) halaman daftar berita
   resminya, lalu menuliskan hasilnya ke field `news` di data.js
   SAJA — field lain (matches, bigMatch, standings, dst) TIDAK
   disentuh sama sekali.

   CARA PAKAI MANUAL:
     node fetch-news.js

   URUTAN JALAN YANG BENAR (lihat update-jadwal.bat):
     1. node fetch-news.js        ← update field `news` di data.js
     2. node fetch-schedule.js    ← generate ulang data.js, tapi
        field `news` yang baru saja ditulis di atas TETAP
        dipertahankan (lihat loadExistingData() di fetch-schedule.js,
        itu memang didesain untuk tidak menimpa field `news`).

   CATATAN JUJUR:
   - Sumber: halaman "Berita Sepak Bola" di bola.net
     (https://www.bola.net/berita-sepak-bola/). Situs ini tidak
     menyediakan endpoint API resmi, jadi daftar judul/link/gambar
     diambil dengan membaca HTML halaman tersebut. Kalau strukturnya
     berubah sewaktu-waktu oleh pemilik situs sumber, script ini
     TIDAK menghapus berita lama di data.js, cuma melewati update
     dan kasih peringatan di layar.
   - Gambar diambil dari thumbnail resmi tiap artikel yang tampil
     di halaman daftar berita.
   - Ringkasan diambil dari meta description resmi tiap halaman
     artikel (potongan ringkasan yang memang disediakan situs sumber
     untuk keperluan pratinjau/SEO), lalu dipotong maksimal ~130
     karakter.
   - ISI ARTIKEL PENUH TIDAK PERNAH DIAMBIL/DISALIN. Yang ditampilkan
     di BOLAKILAS cuma: judul, gambar kecil (thumbnail), ringkasan
     singkat, dan link balik ke artikel asli di bola.net — ini murni
     agregator/pratinjau, pengunjung tetap diarahkan baca lengkap di
     situs sumber.
   ========================================================= */

const fs = require("fs");
const path = require("path");

/* =========================================================
   CONFIG
   ========================================================= */

const SITE_BASE = "https://www.bola.net";
const LISTING_URL = `${SITE_BASE}/berita-sepak-bola/`;
const MAX_NEWS = 6;              // jumlah berita yang tampil di BOLAKILAS
const FETCH_POOL = MAX_NEWS + 6; // ambil lebih banyak, jaga2 ada yg gagal diambil detailnya
const DESC_MAX_LEN = 130;
const DATA_PATH = path.join(__dirname, "data.js");
const FETCH_HEADERS = { "User-Agent": "Mozilla/5.0 (BOLAKILAS news fetcher; +local script)" };

/* =========================================================
   HELPERS
   ========================================================= */

async function fetchHTML(url) {
  const res = await fetch(url, { headers: FETCH_HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} saat mengambil ${url}`);
  return res.text();
}

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8216;|&lsquo;/g, "'")
    .replace(/&#8220;|&ldquo;/g, '"')
    .replace(/&#8221;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "-")
    .replace(/&#8230;|&hellip;/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text, maxLen) {
  if (!text) return "";
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "...";
}

function timeAgoID(isoDate) {
  const then = new Date(isoDate).getTime();
  if (isNaN(then)) return "Baru saja";
  const diffMs = Date.now() - then;
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return "Baru saja";
  if (min < 60) return `${min} menit lalu`;
  const hrs = Math.floor(min / 60);
  if (hrs < 24) return `${hrs} jam lalu`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days} hari lalu`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} minggu lalu`;
  const months = Math.floor(days / 30);
  return `${months} bulan lalu`;
}

/* =========================================================
   AMBIL DATA DENGAN MEMBACA HTML BOLA.NET
   ========================================================= */

// Ambil daftar kandidat berita (judul, link, gambar) dari halaman
// listing "Berita Sepak Bola". Tiap kartu berita di halaman itu
// berbentuk <li><div class="item">...<figure class="image">
// <a href="URL" title="JUDUL"><img ... data-src="GAMBAR"></a>
// </figure>...</div></li>
function parseListingItems(html, limit) {
  const items = [];
  const itemRe = /<div class="item">([\s\S]*?)<\/li>/g;
  let m;
  while ((m = itemRe.exec(html)) && items.length < limit) {
    const block = m[1];
    const linkMatch = block.match(/<a href="([^"]+)" title="([^"]*)"/);
    const imgMatch = block.match(/data-src="([^"]+)"/);
    if (!linkMatch || !imgMatch) continue;

    const url = linkMatch[1];
    const title = stripHtml(linkMatch[2]);
    const image = imgMatch[1];
    if (!url || !title || !image) continue;

    items.push({ url, title, image });
  }
  return items;
}

// Buka halaman artikel satu-satu untuk ambil ringkasan resmi
// (meta description) dan waktu terbit resmi (meta
// article:published_time) — bola.net tidak menampilkan keduanya
// di halaman listing.
async function fetchArticleMeta(url) {
  const html = await fetchHTML(url);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const timeMatch = html.match(/<meta\s+property="article:published_time"\s+content="([^"]*)"/i);
  return {
    desc: descMatch ? stripHtml(descMatch[1]) : "",
    publishedTime: timeMatch ? timeMatch[1] : null
  };
}

async function fetchFootballNews(pool, maxItems) {
  const listingHtml = await fetchHTML(LISTING_URL);
  const candidates = parseListingItems(listingHtml, pool);

  const items = [];
  for (const c of candidates) {
    if (items.length >= maxItems) break;
    try {
      const meta = await fetchArticleMeta(c.url);
      items.push({
        tag: "Bola",
        title: c.title,
        desc: truncate(meta.desc, DESC_MAX_LEN) || "Baca selengkapnya di sumber berita.",
        time: meta.publishedTime ? timeAgoID(meta.publishedTime) : "Baru saja",
        image: c.image,
        url: c.url
      });
    } catch (err) {
      console.warn(`[fetch-news] Lewati satu berita (gagal ambil detail artikel): ${err.message}`);
    }
  }
  return items;
}

/* =========================================================
   TULIS ULANG FIELD `news` DI data.js (FIELD LAIN TIDAK DISENTUH)
   ========================================================= */

function serializeNewsArray(items) {
  const f = (s) => JSON.stringify(s);
  const lines = items.map(item =>
    `        { tag: ${f(item.tag)}, title: ${f(item.title)}, desc: ${f(item.desc)}, time: ${f(item.time)}, image: ${f(item.image)}, url: ${f(item.url)} }`
  );
  return `[\n${lines.join(",\n")}\n    ]`;
}

// Ganti isi blok "news: [ ... ]" di data.js dengan cara menghitung
// kurung siku yang seimbang (bukan regex polos yang gampang salah
// potong kalau ada tanda kurung di dalam teks berita).
function replaceNewsBlock(rawCode, newArrayLiteral) {
  // Terima key "news" baik yang ditulis dengan tanda kutip (format
  // JSON.stringify yang dipakai fetch-schedule.js) maupun tanpa
  // tanda kutip (format object literal JS biasa).
  const markerMatch = rawCode.match(/"?news"?\s*:/);
  if (!markerMatch) {
    throw new Error('Tidak menemukan field "news" di data.js — pastikan data.js masih format aslinya (jalankan fetch-schedule.js dulu minimal sekali kalau file ini baru).');
  }
  const startIdx = markerMatch.index;
  const bracketStart = rawCode.indexOf("[", startIdx);
  if (bracketStart === -1) throw new Error('Format field "news" di data.js tidak dikenali.');

  let depth = 0;
  let endIdx = -1;
  for (let i = bracketStart; i < rawCode.length; i++) {
    if (rawCode[i] === "[") depth++;
    else if (rawCode[i] === "]") {
      depth--;
      if (depth === 0) { endIdx = i; break; }
    }
  }
  if (endIdx === -1) throw new Error('Kurung siku pada field "news" di data.js tidak seimbang — cek manual data.js.');

  return rawCode.slice(0, bracketStart) + newArrayLiteral + rawCode.slice(endIdx + 1);
}

/* =========================================================
   MAIN
   ========================================================= */

async function main() {
  if (!fs.existsSync(DATA_PATH)) {
    console.error("data.js tidak ditemukan. Jalankan fetch-schedule.js dulu minimal sekali untuk membuat data.js awal.");
    process.exit(1);
  }

  const rawCode = fs.readFileSync(DATA_PATH, "utf8");

  let items;
  try {
    items = await fetchFootballNews(FETCH_POOL, MAX_NEWS);
  } catch (err) {
    console.warn(`[fetch-news] Gagal mengambil berita dari bola.net: ${err.message}`);
    console.warn("[fetch-news] Berita lama di data.js TIDAK diubah.");
    return;
  }

  if (!items.length) {
    console.warn("[fetch-news] Tidak ada berita valid yang berhasil diambil. Berita lama di data.js TIDAK diubah.");
    return;
  }

  try {
    const newArrayLiteral = serializeNewsArray(items);
    const updatedCode = replaceNewsBlock(rawCode, newArrayLiteral);
    fs.writeFileSync(DATA_PATH, updatedCode, "utf8");
    console.log(`[fetch-news] Berhasil update ${items.length} berita bola dari bola.net ke data.js.`);
  } catch (err) {
    console.error(`[fetch-news] Gagal menulis data.js: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error("[fetch-news] Fetch berita gagal total:", err);
  process.exit(1);
});
