/* =========================================================
   BOLAKILAS — SERVE-BIGMATCH-LIVE.JS
   "Menyamar" jadi /bigmatch-live.json buat browser — dibaca lewat
   redirect di netlify.toml. Isinya diambil dari Netlify Blobs yang
   ditulis update-bigmatch-live.js, dikirim balik APA ADANYA sebagai
   JSON biasa (beda dari serve-data.js yang balas JavaScript, karena
   bm-live-pitch.js/bm-lineups.js fetch() file ini berulang kali
   sebagai JSON, bukan sekali lewat <script> tag).

   Kalau belum pernah ada data tersimpan (situs baru online / belum ada
   Big Match hari ini), kirim payload kosong yang valid supaya
   front-end tetap menampilkan pesan "belum tersedia" dengan wajar,
   bukan error fetch.
   ========================================================= */

const { getStore } = require("@netlify/blobs");

const BLOB_KEY = "bigmatch-live";

const EMPTY_PAYLOAD = JSON.stringify({
  fixtureId: null, home: "", away: "", statusCode: "NS",
  updatedAt: null, statistics: null, lineups: null
});

exports.handler = async function () {
  let text = null;
  try {
    const store = getStore("bolakilas");
    text = await store.get(BLOB_KEY, { type: "text" });
  } catch (err) {
    console.error("serve-bigmatch-live: gagal baca Netlify Blobs, pakai fallback kosong.", err.message);
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60"
    },
    body: text || EMPTY_PAYLOAD
  };
};
