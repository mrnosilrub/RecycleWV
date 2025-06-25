document.addEventListener('DOMContentLoaded', () => {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    const nav = document.querySelector('nav');
    if (target && nav) {
      const offset = nav.getBoundingClientRect().height;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top });
    }
  }
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
}
