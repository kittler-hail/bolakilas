/* =========================================================
   BOLAKILAS — NETLIFY SCHEDULED FUNCTION
   Pengganti GitHub Actions (kena pembatasan di akun baru) buat jalankan
   fetch-schedule.js secara berkala. Logic ambil data API-Football-nya
   PERSIS SAMA — dipakai ulang lewat runFetchSchedule() di
   fetch-schedule.js, TIDAK diduplikasi di sini.

   VERSI INI TIDAK PAKAI GITHUB SAMA SEKALI buat data live-nya (versi
   sebelumnya lewat GitHub Contents API sempat dicoba, tapi akun GitHub
   yang kena "flagged" ternyata juga memblokir otorisasi OAuth Netlify↔
   GitHub, jadi Netlify tidak bisa auto-redeploy walau commit-nya
   sukses). Sekarang data disimpan langsung di **Netlify Blobs**
   (penyimpanan bawaan Netlify, otomatis tersedia buat semua function di
   site ini, tidak butuh token/API key tambahan sama sekali) — dibaca
   lagi oleh netlify/functions/serve-data.js yang "menyamar" jadi
   /data.js lewat redirect di netlify.toml. Jadi begitu function ini
   selesai jalan, situs LANGSUNG lihat data terbaru, tanpa perlu
   redeploy apa pun.

   ENV VAR yang dibutuhkan (isi di Netlify Site configuration >
   Environment variables):
   - API_FOOTBALL_KEY : WAJIB — sumber data jadwal/skor/klasemen/
                        prediksi (API-Football v3, plan berbayar).
                        Tanpa ini, runFetchSchedule() melempar error
                        (lihat pengecekan di fetch-schedule.js).

   Jadwal jalannya diatur di netlify.toml, BUKAN di file ini.
   ========================================================= */

const { getStore } = require("@netlify/blobs");
const { runFetchSchedule, parseExistingData } = require("../../fetch-schedule.js");

const BLOB_KEY = "site-data";

exports.handler = async function () {
  const store = getStore("bolakilas");

  try {
    await runFetchSchedule({
      loadExisting: async () => {
        const text = await store.get(BLOB_KEY, { type: "text" });
        return text ? parseExistingData(text) : null;
      },
      saveOutput: async (content) => {
        await store.set(BLOB_KEY, content);
      }
    });
    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("scheduled-update GAGAL:", err.message);
    return { statusCode: 500, body: err.message };
  }
};
