# Setup Akun BOLAKILAS (Supabase) — Gratis

File yang ditambahkan/diubah di update ini:

| File | Status |
|---|---|
| `account.js` | **Baru** — semua logika akun, tebak skor, voting, kalkulator acak tim |
| `supabase-schema.sql` | **Baru** — dijalankan sekali di dashboard Supabase, bukan di hosting |
| `index.html` | Diubah — tambah slot tombol akun, modal masuk/daftar, section kalkulator acak tim |
| `script.js` | Diubah sedikit — 2 fungsi kecil untuk "menyambung" ke account.js (fallback tetap jalan kalau account.js belum di-setup) |
| `style.css` | Diubah — kontras teks diperbaiki (update sebelumnya) + gaya untuk elemen akun yang baru |
| `data.js` | Tidak diubah |

Situs tetap 100% berfungsi seperti biasa kalau kamu belum sempat setup Supabase — fitur akun otomatis nonaktif tanpa error.

---

## Langkah 1 — Buat project Supabase (gratis)

1. Buka [supabase.com/dashboard](https://supabase.com/dashboard), daftar/masuk (bisa pakai akun GitHub/Google).
2. Klik **New project**. Pilih organisasi (atau buat baru), kasih nama misal `bolakilas`, buat **database password** (simpan baik-baik, walau jarang dipakai langsung), pilih **Region** yang paling dekat (mis. Singapore untuk Indonesia).
3. Klik **Create new project**, tunggu ± 1–2 menit sampai statusnya aktif.

## Langkah 2 — Jalankan skema database

1. Di sidebar project, buka **SQL Editor** → **New query**.
2. Buka file `supabase-schema.sql` yang saya buatkan, salin semua isinya, tempel ke editor.
3. Klik **Run**. Kalau berhasil akan muncul "Success. No rows returned".
4. Cek di **Table Editor** — harus muncul 3 tabel: `profiles`, `predictions`, `votes`, plus 1 view `vote_counts`.

## Langkah 3 — Ambil kunci API

1. Buka **Project Settings** (ikon gerigi) → **API**.
2. Salin dua nilai ini:
   - **Project URL** (bentuknya `https://xxxxx.supabase.co`)
   - **anon public** key (string panjang di bagian "Project API keys")
3. Buka file `account.js`, di baris paling atas isi:
   ```js
   const SUPABASE_URL = "https://xxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOi....(punya kamu)";
   ```
   Kunci **anon public** ini memang aman ditaruh di file JS yang publik — bukan kunci rahasia. Yang menjaga keamanan data adalah **Row Level Security** yang sudah otomatis aktif dari `supabase-schema.sql` (tiap orang cuma bisa baca/ubah datanya sendiri).

## Langkah 4 — Atur email konfirmasi (opsional tapi disarankan dibaca)

Di **Authentication** → **Sign In / Providers**, pastikan provider **Email** aktif (biasanya sudah default).

Di **Authentication** → **Sign In / Providers** → **Email**, ada opsi **Confirm email**:
- **Aktif** (default): user harus klik link di email dulu sebelum bisa masuk. Lebih aman untuk situs publik.
- **Nonaktif**: user bisa langsung masuk begitu daftar — enak untuk testing cepat, tapi rawan akun asal-asalan/spam kalau situs sudah ramai.

Juga cek **Authentication** → **URL Configuration** → **Site URL**, isi dengan domain situs kamu (mis. `https://bolakilas.com`) supaya link di email konfirmasi mengarah ke tempat yang benar.

## Langkah 5 — Upload ke hosting

Upload ulang **semua file** (termasuk yang tidak berubah) ke hosting kamu:
`index.html`, `style.css`, `script.js`, `account.js`, `data.js`, dan folder `images/`.

## Langkah 6 — Tes

1. Buka situsnya, klik **Masuk / Daftar** di topbar.
2. Coba daftar akun baru → cek di dashboard Supabase, **Authentication** → **Users**, akun baru harus muncul.
3. Kalau "Confirm email" aktif, cek inbox email testing kamu untuk link konfirmasi.
4. Setelah masuk, coba isi **Tebak Skor Kamu** di bagian Big Match, klik Simpan → cek muncul di **Table Editor** → tabel `predictions`.
5. Coba juga vote 1X2 di Big Match, dan **Kalkulator Mix Parlay** (yang ini tidak butuh login).

---

## Catatan penting soal tier gratis Supabase

- **500 MB database & 50.000 monthly active users** gratis — jauh lebih dari cukup untuk mulai.
- ⚠️ **Proyek gratis di-pause otomatis kalau 7 hari tidak ada trafik/API call sama sekali.** Kalau situs kamu masih sepi pengunjung, ini bisa bikin fitur akun "mati" sampai kamu buka manual dashboard-nya lagi dan klik resume.
  - Solusi murah: buat 1 GitHub Actions workflow sederhana yang nge-ping URL project kamu tiap beberapa hari (saya bisa bantu buatkan kalau nanti dibutuhkan).
- Tidak ada biaya apa pun selama masih di bawah limit ini — kalau nanti situs sudah ramai dan lewat limit, baru perlu pertimbangkan paket Pro ($25/bulan).

---

## Kalau ada error

- **Tombol Masuk/Daftar tidak muncul sama sekali** → cek console browser (F12), biasanya karena `SUPABASE_URL`/`SUPABASE_ANON_KEY` belum diisi atau salah format.
- **"Invalid login credentials"** → email/password salah, atau akun belum konfirmasi email (kalau Confirm Email aktif).
- **Vote/tebakan tidak tersimpan** → cek di tabel `predictions`/`votes` langsung di Supabase, dan cek console browser untuk pesan error dari Supabase (biasanya soal RLS kalau skema SQL belum dijalankan dengan benar).
