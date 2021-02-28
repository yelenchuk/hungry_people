function simpleSlider() {
  let sliderSelector = ".specialites__slider";
  let sliderHiddenClass = "is-hidden";
  let sliderInterval = 5000;

  let slider = document.querySelector(sliderSelector);
  let slidesCount = slider.children.length;
  var i = 0;

  setInterval(function () {
    slider.children[i].classList.add(sliderHiddenClass);
    i++;
    if (i >= slider.children.length) {
      i = 0;
    }
    slider.children[i].classList.remove(sliderHiddenClass);
  }, sliderInterval);
}

simpleSlider();
