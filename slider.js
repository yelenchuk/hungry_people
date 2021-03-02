

export class Slider {

    constructor(sliderSelector = "") {
        this.sliderSelector = sliderSelector;
        this.init();
        this.createSlider();
    }

    init() {
        this.render();

    }

    get slider() {
        return document.querySelector(this.sliderSelector);
    }

    get slides() {

        const slides = document.createElement("div");
        slides.className = "specialites__slider--slides";

        sliderData.forEach((slide) => {
            console.log(slide)
            const inner = document.createElement("div");
            inner.className = "container_inner blocks-margin container_inner--pading-bottom specialites__slider-item";
            slides.append(inner);

            const part = document.createElement("div");
            part.className = "container_inner-part";
            inner.append(part);

            const imgBlock = document.createElement("div");
            imgBlock.className = slide.direction === 'left' ? "img-block after_left" : "img-block after_right";
            part.append(imgBlock);

            const img = document.createElement("img");
            img.src = slide.img.src;
            imgBlock.append(img);

            const partText = document.createElement("div");
            partText.className = "container_inner-part text_center";
            inner.append(partText);

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
        })

        this.addDots(sliderData.length);

        return slides;

    }

    render() {
        this.slider.append(this.slides);
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

    createSlider() {

        let sliderHiddenClass = "is-hidden";
        let slides = document.querySelector(".specialites__slider--slides");
        let sliderInterval = 5000;
        let slidesCount = this.slider.children.length;
        let allDots = document.querySelector('.specialites__dots');
        let i = 0;
        console.log(allDots.children, slidesCount);
        allDots.children[i].classList.add('active__dot');

        setInterval(function () {
            slides.children[i].classList.add(sliderHiddenClass);
            allDots.children[i].classList.remove('active__dot');
            i++;
            if (i >= slides.children.length) {
                i = 0;
            }
            allDots.children[i].classList.add('active__dot');
            slides.children[i].classList.remove(sliderHiddenClass);
        }, sliderInterval);
    }
}



