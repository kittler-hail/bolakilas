/* =========================================================
   BOLAKILAS — SERVE-DATA.JS
   "Menyamar" jadi /data.js buat browser — dibaca lewat redirect di
   netlify.toml (from "/data.js" to sini). Isinya diambil dari Netlify
   Blobs yang ditulis scheduled-update.js, dikirim balik APA ADANYA
   sebagai file JavaScript biasa, jadi <script src="data.js"> di
   index.html tidak perlu diubah sama sekali — tetap kelihatan seperti
   file statis dari sudut pandang browser.

   Kalau belum pernah ada data tersimpan sama sekali (situs baru
   pertama kali online, scheduled-update.js belum sempat jalan), kirim
   payload kosong yang valid supaya situs tetap render normal (bukan
   error blank) sambil nunggu run pertama.
   ========================================================= */

const { getStore } = require("@netlify/blobs");

const BLOB_KEY = "site-data";

const EMPTY_PAYLOAD = `const siteData = {
  date: "", bigMatch: null, matches: [], news: [],
  predictionStats: {}, recentPredictions: [],
  history: {}, upcoming: {}, standings: {}, highlights: []
};
`;

exports.handler = async function () {
  // Apa pun yang gagal di sini (Blobs belum terkonfigurasi, error
  // jaringan internal, dst) HARUS tetap balas 200 dengan payload valid
  // — bukan 502/crash, supaya situs tidak pernah tampil kosong cuma
  // karena bagian ini bermasalah (pernah kejadian, jangan diulang).
  let text = null;
  try {
    const store = getStore("bolakilas");
    text = await store.get(BLOB_KEY, { type: "text" });
  } catch (err) {
    console.error("serve-data: gagal baca Netlify Blobs, pakai fallback kosong.", err.message);
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      // Cache pendek — data live tetap kerasa "segar" tanpa bikin tiap
      // request selalu baca ulang dari Blobs.
      "Cache-Control": "public, max-age=90"
    },
    body: text || EMPTY_PAYLOAD
  };
};
