document.addEventListener('DOMContentLoaded', () => {
  const load = (id, url) => fetch(url)
    .then(res => res.text())
    .then(html => { document.getElementById(id).innerHTML = html; });

  const navLoaded = load('navbar-placeholder', 'nav.html');
  load('footer-placeholder', 'footer.html');

  navLoaded.then(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      const nav = document.querySelector('#navbar-placeholder nav');
      if (target && nav) {
        const offset = nav.getBoundingClientRect().height;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top });
      }
    }
  });
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
}
