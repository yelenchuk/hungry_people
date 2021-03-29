import { Slider } from "./slider.js";
import { Menu } from "./menu.js";

// const slider = new Slider('.specialites__slider');
const slider2 = new Slider('.specialites__slider');


document.addEventListener("DOMContentLoaded", createMenu());
function createMenu() {
  const menuFull = new Menu('.menu__full');
}

// Set menu to section smooth scroll
const links = document.querySelectorAll(".header__navigation li a"); // NodeList - псевдомассив
//console.log(links);
for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault(); //не дает обновить страницу
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop; //расстояние от верхней части экрана до нужного блока

  scroll({
    top: offsetTop,
    behavior: "smooth", // св-во для плавной прокрутки
  });
}

// Set smooth scrollDown
const scrollHomePage = document.querySelector(".header__scroll");
scrollHomePage.addEventListener("click", clickHandler);

//hamburger control
const hamburger = document.querySelector(".transform-hamburger");
hamburger.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  const isHamburgerContaine = hamburger.classList.contains("transform-hamburger--transformed");
  const hamburgerMenu = document.querySelector('.hamburger-menu__wrapper');
  const bodyBlock = document.querySelector(".body");

  if (!isHamburgerContaine) {
    hamburgerMenu.style.transform = "translateX(0%)";
    bodyBlock.style.overflow = "hidden";
    hamburger.classList.add('transform-hamburger--transformed');
  } else {
    hamburgerMenu.style.transform = "translateX(100%)";
    bodyBlock.style.overflow = "auto";
    hamburger.classList.remove('transform-hamburger--transformed');
  }
}

const linksHamburger = document.querySelectorAll(".hamburger-menu__item a"); // NodeList - псевдомассив
//console.log(links);
for (const linkHamburger of linksHamburger) {
  linkHamburger.addEventListener("click", toggleHamburgerMenu);
}

