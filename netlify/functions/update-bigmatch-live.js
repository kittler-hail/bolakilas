/* =========================================================
   BOLAKILAS — NETLIFY SCHEDULED FUNCTION (Statistik Live Big Match)
   Pengganti .github/workflows/update-bigmatch-live.yml buat setup
   Netlify (lihat catatan di netlify/functions/scheduled-update.js
   soal kenapa Netlify jadi alternatif). Jalan tiap 5 menit (diatur di
   netlify.toml), jauh lebih sering dari scheduled-update.js (tiap
   jam) karena cuma memproses SATU fixture (Big Match hari ini) — lihat
   fetch-bigmatch-live.js buat detail & alasannya.

   Baca baseline Big Match dari blob "site-data" (ditulis
   scheduled-update.js), simpan hasilnya ke blob terpisah
   "bigmatch-live" — dibaca lagi oleh serve-bigmatch-live.js yang
   "menyamar" jadi /bigmatch-live.json lewat redirect di netlify.toml.

   ENV VAR: API_FOOTBALL_KEY (sama seperti scheduled-update.js).
   ========================================================= */

const { getStore } = require("@netlify/blobs");
const { runFetchBigMatchLive } = require("../../fetch-bigmatch-live.js");
const { parseExistingData } = require("../../fetch-schedule.js");

const DATA_BLOB_KEY = "site-data";
const LIVE_BLOB_KEY = "bigmatch-live";

exports.handler = async function () {
  const store = getStore("bolakilas");

  try {
    await runFetchBigMatchLive({
      loadData: async () => {
        const text = await store.get(DATA_BLOB_KEY, { type: "text" });
        return text ? parseExistingData(text) : null;
      },
      loadExistingLive: async () => {
        const text = await store.get(LIVE_BLOB_KEY, { type: "text" });
        if (!text) return null;
        try { return JSON.parse(text); } catch { return null; }
      },
      saveOutput: async (content) => {
        await store.set(LIVE_BLOB_KEY, content);
      }
    });
    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("update-bigmatch-live GAGAL:", err.message);
    return { statusCode: 500, body: err.message };
  }
};
