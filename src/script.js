const mobileMenuToggler = document.querySelector("#mobile-menu-toggler");
const icons = mobileMenuToggler.querySelectorAll("i");
const mobileMenu = document.querySelector("#mobile-menu");

mobileMenuToggler.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
  for (let icon of icons) {
    icon.classList.toggle("hidden");
  }
}
