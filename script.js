function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-menu"); // Change here
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
