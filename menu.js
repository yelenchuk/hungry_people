export class Menu {
    constructor(menuSelector = "") {

    this.menuSelector = menuSelector;

    this.isHamburgerMenu = false;

    this.init();
}

    init() {
     this.menuEl.append(this.menuIteams);
     this.menuEl.append(this.dish());
 }

    get menuEl() {
        return document.querySelector(this.menuSelector);  // нашли <div class=".menu__full"></div>
    }

    get menuIteams() {

        const innerMenu = document.createElement("div");
        innerMenu.className = "container_inner--pading-menu";

        const innerMenuPart = document.createElement("div");
        innerMenuPart.className = "text_center";
        innerMenu.append(innerMenuPart);

        const innerTitel = document.createElement("h2");
        innerTitel.className = "second_title";
        innerTitel.innerText = menuTitle.pageTitle;
        innerMenuPart.append(innerTitel);

        const innerMenuText = document.createElement("p");
        innerMenuText.className = "section__text--title";
        innerMenuText.innerText = menuTitle.description;
        innerMenuPart.append(innerMenuText);

        const menuList = document.createElement("ul");
        menuList.className = "menu-list";
        innerMenu.append(menuList);

        menuType.forEach (menuListElIteam => {

           const menuListEl = document.createElement("li")
            menuListEl.innerText = menuListElIteam;
            menuList.append(menuListEl);

            menuListEl.addEventListener("click", this.refreshMenu);
        });
        return innerMenu;
    }

     dish(menuTypeItem) {

        const listIteams = document.createElement("ul");
         listIteams.className = "menu-list__items";

         menuData.forEach(aboutDish => {

        const el = document.createElement('li');
        el.className = "menu-list__dish";
             listIteams.append(el);
             el.setAttribute("menu-list__dish", aboutDish.type);

         const elTitle  = document.createElement('div'); //first part
             elTitle.className = "menu-list__items-inner";
             el.append(elTitle);

        const elTitleText = document.createElement('p');
        elTitleText.className = 'menu-list__items--text-first';
        elTitleText.innerText = aboutDish.title;
             elTitle.append(elTitleText);

        const elPrice = document.createElement('p');
        elPrice.className = 'menu-list__items--text-first';
             elPrice.innerText = `${aboutDish.price} ${aboutDish.currency}`;
             elTitle.append(elPrice);

        const elDescription =document.createElement('p'); //second part
        elDescription.className = "menu-list__items--text-second";
        elDescription.innerText = aboutDish.description;
             el.append(elDescription);
         })
         return listIteams;
     }

    refreshMenu(e) {
        e.preventDefault();
        const dishIteams = document.querySelectorAll(".menu-list__dish");
        dishIteams.forEach(dish => {
            dish.style.display = "block";
            if (e.originalTarget.innerText !== "ALL") {
                if (dish.getAttribute('menu-list__dish') !== e.originalTarget.innerText) {
                    dish.style.display = "none";
                }
            }
        } );
    }
}
