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
