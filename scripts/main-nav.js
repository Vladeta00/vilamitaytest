// Making navigation darker after it leaves herio
const nav = document.querySelector(".main-nav");
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");

let heroHeight = hero.offsetHeight;
let headerHeight = header.offsetHeight;

// The Header NavBar changes background color and logo size once you scroll
window.onscroll = () => {
  if (window.scrollY > 1) {
    nav.classList.add("main-nav__darker");
    logo.classList.add("logo-smaller");
  } else {
    nav.classList.remove("main-nav__darker");
    logo.classList.remove("logo-smaller");
  }
};

// Making Hamburger Icon change on click
const hamburgerMenu = document.getElementById("hamburger");
const hamburgerImg = document.getElementById("hamburger-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

let hamburger1st = true;

hamburgerMenu.addEventListener("click", function () {
  if (hamburger1st) {
    hamburgerImg.src = "./imgs/icons/x-close-delete.svg";
    dropdownMenu.classList.toggle("open");
  } else {
    hamburgerImg.src = "./imgs/icons/menu.svg";
    dropdownMenu.classList.toggle("open");
  }
  hamburger1st = !hamburger1st;
});
