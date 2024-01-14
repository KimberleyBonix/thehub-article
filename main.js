const sidenav = document.querySelector(".sidenav");
const openBtn = document.querySelector(".navigation__open");
const closeBtn = document.querySelector(".navigation__close");

document.querySelector(".navigation").addEventListener("click", () => {
  sidenav.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});
