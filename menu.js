export class Menu {
    constructor(menuSelector = "") {

    this.menuSelector = menuSelector;
    this.init();
}

    init() {
     this.menuEl.append(this.menuIteams);
     this.menuEl.append(this.dish);
 }

    get menuEl() {
        return document.querySelector(this.menuSelector);  // нашли <div class=".menu__full"></div>
    }

    get menuIteams() {

        const innerMenu = document.createElement("div");
        innerMenu.className = "container_inner--pading-one";

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

            //menuListEl.addEventListener("click", this.refreshMenu());

           // const menuListElInner = document.createElement( 'a');


        });
        console.log(innerMenu);
        return innerMenu;

    }

     get dish() {
        const listIteams = document.createElement("ul");
         listIteams.className = "menu-list__items";

         menuData.forEach(aboutDish => {
        const el = document.createElement('li');
        el.className = "menu-list__items li";
             listIteams.append(el);

        const elInner = document.createElement("div");
        elInner
             el.append(elInner);

         const elTitle  = document.createElement('div'); //first part
             elInner.append(elTitle);

        const elTitleText = document.createElement('p');
        elTitleText.className = 'menu-list__items--text-first';
        elTitleText.innerText = aboutDish.title;
             elTitle.append(elTitleText);

        const elPrice =document.createElement('p');
        elPrice.className = 'menu-list__items--text-first';
             elPrice.innerText = aboutDish.price;
             elTitle.append(elPrice);

             const elCurrency =document.createElement('p');
             elCurrency.className = 'menu-list__items--text-first';
             elCurrency.innerText = aboutDish.currency;
             elTitle.append(elCurrency);


        const elDescription =document.createElement('p');
        elDescription.className = "menu-list__items--text-second";
        elDescription.innerText = aboutDish.description;
        elInner.append(elDescription);


         })

         return listIteams;

     }

    refreshMenu(e) {
        e.preventDefault();

    }



}
