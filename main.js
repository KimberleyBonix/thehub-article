const sidenav = document.querySelector(".sidenav");
const openBtn = document.querySelector(".navigation__button--open");
const closeBtn = document.querySelector(".navigation__button--close");

document.querySelector(".navigation").addEventListener("click", () => {
  sidenav.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
