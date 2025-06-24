document.addEventListener('DOMContentLoaded', () => {
  const load = (id, url) => fetch(url)
    .then(res => res.text())
    .then(html => { document.getElementById(id).innerHTML = html; });

  load('navbar-placeholder', 'nav.html');
  load('footer-placeholder', 'footer.html');
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
}
