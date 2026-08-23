@echo off
cd /d "%~dp0"
echo ===================================================
echo   BOLAKILAS - Update Jadwal + Berita Otomatis
echo ===================================================
node fetch-news.js
node fetch-schedule.js
echo.
echo Selesai. Tekan tombol apa saja untuk menutup jendela ini.
pause >nul
