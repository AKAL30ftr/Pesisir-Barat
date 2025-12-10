// basic UI interactions: search + year + nav active
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // search button (dummy)
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function () {
      const q = searchInput.value.trim();
      if (!q) {
        alert('Masukkan kata kunci pencarian.');
      } else {
        // contoh behavior: arahkan ke hasil pencarian (dummy)
        alert('Mencari: ' + q);
      }
    });
  }

  // simple nav active toggling (for demo)
  document.querySelectorAll('.main-nav .nav-item').forEach(function (a) {
    a.addEventListener('click', function (e) {
      document.querySelectorAll('.main-nav .nav-item').forEach(el => el.classList.remove('active'));
      a.classList.add('active');
      e.preventDefault();
    });
  });
});
