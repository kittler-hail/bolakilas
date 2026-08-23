# BOLAKILAS — Panduan Hosting Gratis & Auto-Update

Situs ini murni statis (HTML/CSS/JS), jadi bisa di-hosting gratis selamanya
tanpa server. Setup di bawah juga **menggantikan** `update-jadwal.bat` +
Windows Task Scheduler — data akan ter-update otomatis di cloud, jadi
komputer kamu tidak perlu nyala terus.

## Kenapa GitHub Pages + GitHub Actions?

- **Hosting**: 100% gratis, HTTPS otomatis, bisa pakai domain sendiri.
- **Auto-update**: GitHub Actions menjalankan `fetch-schedule.js` sesuai
  jadwal (cron) di server GitHub, lalu meng-commit `data.js` yang baru.
  Repo publik dapat menit Actions **tanpa batas** secara gratis.
- Semua sudah disiapkan di folder ini: `.github/workflows/update-jadwal.yml`.

Alternatif kalau GitHub Actions tidak bisa dipakai (akun baru sering kena
pembatasan otomatis dari GitHub) atau memang tidak mau pakai GitHub sama
sekali buat hosting: **Netlify** — lihat bagian "Alternatif: Netlify" di
bawah, sudah disiapkan juga (`netlify.toml` +
`netlify/functions/scheduled-update.js`).

## Langkah-langkah

### 1. Buat akun & repo GitHub
1. Daftar di https://github.com (gratis).
2. Klik **New repository** → beri nama, misalnya `bolakilas` → pilih
   **Public** (supaya Actions gratis tanpa batas) → **Create repository**.

### 2. Upload semua file
Upload seluruh isi folder ini ke repo (lewat "Add file → Upload files" di
web GitHub, atau pakai `git push` dari komputer):
```
index.html
style.css
script.js
data.js
team-profile.js
squads.js               ← skuad pemain, auto-update mingguan (lihat langkah 6)
transfers.js             ← berita transfer, auto-update mingguan (lihat langkah 6)
coaches.js               ← pelatih & prestasi tiap tim, auto-update mingguan (lihat langkah 6)
bigmatch-live.json       ← statistik live, susunan pemain, odds & venue Big Match, auto-update tiap 5 menit (lihat langkah 6)
bm-live-pitch.js
bm-lineups.js
bm-odds-venue.js
fetch-schedule.js
fetch-squads.js
fetch-transfers.js
fetch-coaches.js
fetch-bigmatch-live.js
package.json
.nojekyll
robots.txt
.github/workflows/update-jadwal.yml
.github/workflows/update-squads.yml
.github/workflows/update-transfers.yml
.github/workflows/update-coaches.yml
.github/workflows/update-bigmatch-live.yml
images/                 ← folder logo tim & logo.png (lihat catatan di bawah)
```

### 3. Aktifkan GitHub Pages
1. Di repo → **Settings → Pages**.
2. **Source**: pilih branch `main`, folder `/ (root)` → **Save**.
3. Tunggu 1-2 menit, GitHub kasih link seperti
   `https://username.github.io/bolakilas/` — itu situs kamu, sudah online.

### 4. Aktifkan auto-update jadwal
Workflow di `.github/workflows/update-jadwal.yml` sudah dikonfigurasi
jalan **setiap jam** dan otomatis commit `data.js` kalau ada perubahan.
Tidak perlu setup tambahan — begitu file ini ada di repo, GitHub langsung
menjalankannya sesuai jadwal.

- Mau uji coba manual: buka tab **Actions** di repo → pilih workflow
  **Update Jadwal Bola** → **Run workflow**.
- Mau ubah frekuensi: edit baris `cron: "0 * * * *"` di file workflow
  (format cron, waktu dalam UTC/GMT — WIB = UTC+7).

### 5. (Opsional) Domain sendiri
Settings → Pages → **Custom domain**, arahkan DNS domain kamu (CNAME) ke
`username.github.io`. Domain `.my.id` / `.web.id` seringkali dapat harga
promo/gratis untuk pelajar Indonesia lewat program tertentu — tapi domain
`.github.io` bawaan sudah cukup dan gratis selamanya.

### 6. Aktifkan Jadwal, Skuad, Transfer & Statistik Live (API-Football, plan berbayar)
Semua data otomatis di situs ini — jadwal/skor/klasemen/prediksi/top
skor/cedera (`fetch-schedule.js`), skuad tim (`fetch-squads.js`),
berita transfer (`fetch-transfers.js`), dan statistik live/susunan
pemain/odds/venue Big Match (`fetch-bigmatch-live.js`) — sama-sama
diambil dari **API-Football v3**, plan berbayar (bukan lagi ESPN/plan
gratis). Kalau `API_FOOTBALL_KEY` belum diisi: `fetch-schedule.js` akan
GAGAL TOTAL (jadwal tidak bisa diambil sama sekali) — script lain
(`fetch-squads.js`/`fetch-transfers.js`/`fetch-bigmatch-live.js`) juga
langsung berhenti dengan pesan error yang jelas kalau key belum diisi,
tapi TIDAK membuat bagian lain situs ikut error (modal Profil Tim/Berita/
Big Match otomatis menampilkan "belum tersedia" untuk bagian yang
belum ada datanya).

Langkah aktivasi (sekali saja):
1. Daftar & aktifkan plan berbayar di https://dashboard.api-football.com,
   lalu salin **API key** dari dashboard. Cek plan/kuota kamu lewat
   `GET https://v3.football.api-sports.io/status` (header `x-apisports-key`)
   kalau mau lihat sisa kuota harian & limit per menit.
2. Di repo GitHub → **Settings → Secrets and variables → Actions →
   New repository secret**. Nama: `API_FOOTBALL_KEY`, isi: API key kamu
   → **Add secret**. (Jangan pernah menulis key ini langsung di file
   manapun yang di-commit ke repo.) Secret yang sama dipakai SEMUA
   workflow di bawah.
3. Buka tab **Actions** → pilih workflow **Update Jadwal Bola** →
   **Run workflow** (uji coba manual sekali, cek log-nya sampai baris
   `Selesai. data.js diperbarui ...`). Workflow ini otomatis jalan
   **tiap jam**, dan sekarang juga mengisi field `topScorers`/
   `topAssists` (menu "Top Skor & Assist") dan `injuries` (blok "Pemain
   Cedera" di modal Profil Tim), keduanya dibatasi ke liga yang sama
   dengan menu Klasemen.
4. Buka tab **Actions** → pilih workflow **Update Skuad Tim** →
   **Run workflow**. Prosesnya lebih lama (ratusan tim, bukan cuma tim
   besar) — tunggu sampai log-nya selesai. Setelah itu workflow ini
   otomatis jalan **tiap Senin** dan commit `squads.js` kalau ada
   perubahan.
5. Buka tab **Actions** → pilih workflow **Update Berita Transfer** →
   **Run workflow**. Sama seperti Skuad, prosesnya lama (ratusan tim)
   — jalan **tiap Senin** (1 jam setelah Update Skuad Tim), commit
   `transfers.js` yang otomatis muncul di halaman Berita & ticker.
6. Buka tab **Actions** → pilih workflow **Update Pelatih & Prestasi** →
   **Run workflow**. Prosesnya paling lama dari semua workflow mingguan
   (2 request per tim: data pelatih + gelar juara) — jalan **tiap
   Senin** (1 jam setelah Update Berita Transfer), commit `coaches.js`
   yang muncul sebagai blok "Pelatih" di modal Profil Tim (tim apa pun,
   bukan cuma Big Match).
7. (Opsional, tapi otomatis aktif begitu ada Big Match) Buka tab
   **Actions** → pilih workflow **Update Statistik Live & Susunan
   Pemain Big Match** → **Run workflow**. Ini yang mengisi statistik
   live (possession/tembakan/corner/dst), susunan pemain + rating
   pemain, detail venue, dan odds pasar di panel Big Match — jalan
   **tiap 5 menit**, tapi cuma benar-benar memanggil API-Football kalau
   memang ada Big Match hari ini (murah, lihat catatan di
   `fetch-bigmatch-live.js`). Kalau `bigmatch-live.json` belum pernah
   ter-commit sama sekali, blok-blok itu otomatis menampilkan pesan
   "belum tersedia" — bukan error.

**Soal blok "Odds Pasar"**: murni informasi (persentase kemenangan dari
`/predictions` API-Football yang sudah dipakai situs ini SELALU tampil
duluan di bagian "Prediksi Skor" — bukan odds bandar). Blok "Odds
Pasar" di bawahnya menampilkan odds bandar ASLI dari salah satu
bookmaker yang dicakup API-Football, selalu disertai disclaimer
eksplisit bahwa BOLAKILAS tidak mengoperasikan/mengendorse layanan judi
apa pun (lihat `bm-odds-venue.js`). Judi daring ilegal di Indonesia —
kalau kamu tidak ingin menampilkan odds bandar sama sekali, hapus blok
`#bm-odds-block` di `index.html` dan panggilan `BKOddsVenue.sync()` di
`script.js` (bagian venue-nya tetap bisa dipertahankan terpisah kalau
mau, tinggal pisahkan dari `bm-odds-venue.js`).

## Alternatif: Netlify (kalau GitHub Actions diblokir/tidak mau dipakai)

Hosting-nya sendiri bisa langsung jalan di Netlify tanpa GitHub sama
sekali (drag & drop folder ini ke **app.netlify.com/drop**, atau connect
repo GitHub-nya ke Netlify buat auto-deploy tiap ada perubahan). Yang
butuh sedikit setup tambahan cuma bagian **auto-update jadwal &
highlight**-nya, karena Netlify Functions tidak punya filesystem
persisten buat langsung menulis `data.js` seperti GitHub Actions.

Solusinya: `netlify/functions/scheduled-update.js` menjalankan logic
yang SAMA PERSIS dengan `fetch-schedule.js` (tidak ada kode yang
diduplikasi), cuma baca/simpan `data.js` lewat **GitHub Contents API**
(pakai Personal Access Token biasa, BUKAN GitHub Actions — jadi tidak
kena pembatasan yang sama). Begitu file itu commit `data.js` baru ke
GitHub, Netlify (kalau sudah di-connect ke repo-nya) otomatis re-deploy.

### Setup (sekali saja)

1. **Buat Personal Access Token GitHub** — beda dari Actions, ini murni
   izin akses API, jarang kena pembatasan akun baru:
   - Buka **github.com/settings/tokens** → **Generate new token** →
     pilih **"Generate new token (classic)"**.
   - Kasih nama bebas (misal "netlify-bolakilas"), centang scope **`repo`**
     saja, expiration bebas (atau "No expiration" kalau tidak mau bikin
     ulang tiap beberapa bulan).
   - **Generate token** → copy token-nya (cuma muncul sekali).
2. **Isi Environment Variables di Netlify** — buka site-nya di
   app.netlify.com → **Site configuration → Environment variables** →
   **Add a variable**, isi satu-satu:
   - `GITHUB_TOKEN` = token dari langkah 1.
   - `GITHUB_REPO` = `username-kamu/nama-repo` (contoh: `reynayumi/bolakilass`).
   - `GITHUB_BRANCH` = `main` (opsional, defaultnya memang `main`).
   - `API_FOOTBALL_KEY` = key API-Football yang sama dipakai di GitHub
     Secrets (lihat langkah 6) — kalau sudah diisi di sana sebelumnya,
     itu TIDAK ikut kebawa ke Netlify, harus diisi ulang manual di sini.
3. **Connect repo GitHub ke Netlify** (kalau belum) — Site configuration
   → **Build & deploy** → **Link repository** → pilih repo-nya. Ini
   supaya commit baru dari scheduled function otomatis ter-deploy.
4. **Uji coba manual** — tab **Functions** di dashboard Netlify → klik
   `scheduled-update` → tombol **Trigger function** (atau sejenisnya,
   tergantung versi dashboard). Cek log-nya: harus muncul baris
   `=== BOLAKILAS fetch-schedule — ... ===` sampai `Selesai. ...`.
   Kalau ada error, biasanya soal `GITHUB_TOKEN`/`GITHUB_REPO` salah isi.

Setelah itu, `scheduled-update` jalan otomatis tiap jam (diatur di
`netlify.toml`) — tidak perlu GitHub Actions sama sekali.

## Catatan penting soal gambar

`index.html` memanggil `images/logo.png` dan `style.css` memanggil
`images/footer.png`, dan `script.js` mencari logo tim di
`images/logos/nama-tim.png`. **Pastikan folder `images/` ikut di-upload**
ke repo. Kalau logo tim tidak ada, sistem sudah otomatis fallback ke
inisial (tidak apa-apa). Tapi logo brand & footer sebaiknya tetap kamu
siapkan — saya sudah tambahkan fallback teks otomatis untuk logo brand
kalau filenya belum ada, supaya tidak muncul ikon gambar rusak.

## Yang sudah saya perbaiki di kode

1. **SEO & social share** — menambahkan meta description, Open Graph
   tags, `robots.txt`, dan `link rel canonical` di `index.html` (ganti
   `GANTI-DENGAN-DOMAIN-KAMU` dengan domain asli kamu setelah online).
2. **Fallback logo** — logo brand di header tidak lagi tampil ikon
   "gambar rusak" kalau `images/logo.png` belum di-upload; otomatis
   diganti teks "BOLAKILAS" yang sudah diberi gaya lewat CSS.
3. **`.nojekyll`** — mencegah GitHub Pages memproses situs lewat Jekyll
   (bisa menyebabkan file/folder tertentu tidak ter-serve dengan benar).
4. **`package.json`** — supaya jelas versi Node yang dibutuhkan
   (`fetch-schedule.js` pakai `fetch()` bawaan Node 18+).
5. **Otomatisasi cloud** — workflow GitHub Actions yang menggantikan
   `update-jadwal.bat` + Task Scheduler sepenuhnya, jadi tidak bergantung
   pada komputer kamu menyala.

## Yang perlu kamu cek sendiri (tidak bisa saya verifikasi dari sini)

- **Kuota plan API-Football kamu** — LEAGUES di `fetch-schedule.js`
  mencakup 19 liga, dan tiap run memanggil endpoint musim/jadwal/
  prediksi/goals-cards/klasemen untuk semuanya (lihat estimasi request
  di komentar atas `fetch-schedule.js`). Sudah diuji langsung jalan
  bersih di plan "Mega" (150.000 request/hari, 900/menit) — kalau
  plan kamu lebih kecil, pantau log **Actions** beberapa run pertama
  untuk pastikan tidak kehabisan kuota harian.
- **Burst rate-limit per detik**: API-Football membatasi request
  BERSAMAAN per detik jauh lebih ketat daripada limit/menit-nya —
  `FETCH_CONCURRENCY` (di `fetch-schedule.js`/`fetch-squads.js`) & retry
  otomatis di `apiGet()` sudah disetel aman lewat uji coba langsung,
  tapi kalau kamu upgrade/downgrade plan dan mulai lihat error
  `rateLimit` di log, turunkan `FETCH_CONCURRENCY`.
- **Data `stadium` di Big Match** — kalau ada teks yang aneh/tidak
  konsisten, itu berasal dari data mentah `fixture.venue.name`
  API-Football, bukan bug tampilan.
- **Liga tambahan** — situs ini cuma menampilkan liga yang ada di
  `LEAGUES` (`fetch-schedule.js`). Mau tambah liga lain (mis. Saudi Pro
  League, Championship Inggris)? Cari ID-nya lewat
  `GET /leagues?search=nama-liga` (header `x-apisports-key`), lalu
  tambahkan entri baru di `LEAGUES` — otomatis ikut kepakai baik oleh
  jadwal maupun daftar tim `fetch-squads.js` (DRY, satu sumber liga).
