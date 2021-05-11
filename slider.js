
export class Slider {

    constructor(sliderSelector = "") {
        this.sliderSelector = sliderSelector; // св-во
        this.currentSlide = 0;
        this.init();
        this.createSlider();
    }

    init() {
        this.slider.append(this.slides); // инициализация добавляет наш слайдер в <div class="specialites__slider"></div>
    }


    get slider() {
        return document.querySelector(this.sliderSelector);  // нашли <div class="specialites__slider"></div>
    }

    get slides() {

        const slides = document.createElement("div");
        slides.className = "specialites__slider--slides";

        sliderData.forEach((slide, index) => {

            const inner = document.createElement("div");
            inner.className = "container_inner blocks-margin container_inner--pading-bottom specialites__slider-item";
            slides.append(inner);
            inner.setAttribute("data-index-number", index);

            const part = document.createElement("div");
            part.className = "container_inner-part";

            const imgBlock = document.createElement("div");
            imgBlock.className = slide.direction === 'left' ? "img-block after_left" : "img-block after_right";
            part.append(imgBlock);

            const img = document.createElement("img");
            img.src = slide.img.src;
            imgBlock.append(img);

            const partText = document.createElement("div");
            partText.className = "container_inner-part text_center";

            const h2 = document.createElement("h2");
            h2.className = "second_title";
            h2.innerText = slide.text.title;
            partText.append(h2);

            const textDescription = document.createElement("div");
            textDescription.className = "text_description";
            partText.append(textDescription);

            const textTitle = document.createElement("p");
            textTitle.className = "section__text--title";
            textTitle.innerText = slide.text.description;
            textDescription.append(textTitle);

            const textDesc = document.createElement("p");
            textDesc.className = "section__text--description";
            textDesc.innerText = slide.text.other_text;
            textDescription.append(textDesc);

            if (slide.direction === 'left') {
                inner.append(part);
                inner.append(partText);
            } else {
                inner.append(partText);
                inner.append(part);
            }

        })

        this.addDots(sliderData.length);
        this.addButton();

        return slides;
    }


    addDots(countDots) {
        const dots = document.createElement("div");
        dots.className = "specialites__dots";

        for (let i = 0; i < countDots; i++) {

            const itemDots = document.createElement("div");
            itemDots.className = "specialites__dot";
            dots.append(itemDots);
        }

        this.slider.append(dots);
    }

    addButton() {
        const slideControl = document.createElement("div");
        slideControl.className = "specialites__control";
        this.slider.append(slideControl);

        const prevBtn = document.createElement("div");
            prevBtn.className = 'specialites__control-left';
        slideControl.append(prevBtn);

        const nextBtn = document.createElement("div");
            nextBtn.className = 'specialites__control-right';
            slideControl.append(nextBtn);
    }


    createSlider() {

        const slides = document.querySelectorAll(".specialites__slider-item")
        const dots = document.querySelectorAll('.specialites__dot')

        const init = (numb) => {
            slides.forEach((slide, index) => {
                slide.classList.remove("is-active")
                dots.forEach((dot, index) => {
                    dot.classList.remove("active__dot")
                })
            })
            slides[numb].classList.add("is-active")
            dots[numb].classList.add("active__dot")
        }


        document.addEventListener("DOMContentLoaded", init(this.currentSlide))
        const next = () => {
            this.currentSlide >= slides.length - 1 ? this.currentSlide = 0 : this.currentSlide++
            init(this.currentSlide)
        }

        const prev = () => {
            this.currentSlide <= 0 ? this.currentSlide = slides.length - 1 : this.currentSlide--
            init(this.currentSlide)
        }

        document.querySelector(".specialites__control-right").addEventListener('click', next)
        document.querySelector(".specialites__control-left").addEventListener('click', prev)


        setInterval(() => {
            next()
        }, 5000);

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                console.log(this.currentSlide)
                init(i)
                this.currentSlide = i
            })
        })
    }
}
