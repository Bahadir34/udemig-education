const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  if (window.innerWidth < 1300) {
    navbar.classList.toggle("active");
  }
});