// Initialize and add the google map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 51.528308, lng: -0.3817765 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

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

//
