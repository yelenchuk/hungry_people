
import { Slider } from "./slider.js";


// const slider = new Slider('.specialites__slider');
const slider2 = new Slider('.specialites__slider');





// Set menu to section smooth scroll
const links = document.querySelectorAll(".header__navigation li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault(); //не дает обновить страницу
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// Set smooth scrollDown
const scrollHomePage = document.querySelector(".header__scroll");
scrollHomePage.addEventListener("click", clickHandler);
