// Ambil elemen tautan (buttons/link) untuk sheet
const sheetLinks = document.querySelectorAll('.sheet-link');

// Ambil semua elemen section (setiap sheet)
const sheets = document.querySelectorAll('.sheet-section');

// Tambahkan event listener pada setiap tautan
sheetLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah reload halaman saat diklik

    const selectedSheet = link.dataset.sheet; // Ambil nama sheet yang dipilih

    // Aktifkan tautan yang diklik, nonaktifkan tautan lain
    sheetLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');

    // Tampilkan hanya section (sheet) yang sesuai, sembunyikan lainnya
    sheets.forEach(sheet => {
      if (sheet.id === selectedSheet) {
        sheet.classList.remove('hidden');
      } else {
        sheet.classList.add('hidden');
      }
    });
  });
});
