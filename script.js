// Ambil elemen-elemen tautan sheet dan section
const sheetLinks = document.querySelectorAll('.sheet-link');
const sheets = document.querySelectorAll('.sheet-section');

// Tambahkan event listener pada setiap tautan
sheetLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Dapatkan nama sheet dari atribut data-sheet
    const selectedSheet = link.dataset.sheet;

    // Aktifkan tautan yang diklik, nonaktifkan yang lain
    sheetLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');

    // Tampilkan section sheet yang sesuai, sembunyikan yang lain
    sheets.forEach(sheet => {
      if (sheet.id === selectedSheet) {
        sheet.classList.remove('hidden');
      } else {
        sheet.classList.add('hidden');
      }
    });
  });
});
