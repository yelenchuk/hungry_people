const sliderData = [
    {
        direction: "left",
        text: {
            title: "1",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
            other_text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
        },
        img: {
            src: "img/specialetis.png"
        }
    },
    {
        direction: "right",
        text: {
            title: "2",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
            other_text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
        },
        img: {
            src: "img/specialetis.png"
        }
    },
    {
        direction: "left",
        text: {
            title: "3",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
            other_text: "Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
        },
        img: {
            src: "img/corporate_pzrties.png"
        }
    }

];


const menuTitle =
    {
        pageTitle: "delisiose menu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
    }
;

const menuType = ["all", "soupe", "pizza", "pasta", "desert", "wine", "beer", "drinks"];

const menuData = [
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "SOUPE",
        title: "SOUPE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },

    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },
    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },
    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },
    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },
    {
        type: "PIZZA",
        title: "PIZZA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 55.68,
        currency: "USD"

    },
     {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },
    {
        type: "PASTA",
        title: "PASTA QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 75.68,
        currency: "USD"

    },

    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },
    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },
    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },

    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },
    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },
    {
        type: "DESERT",
        title: "DESERT QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 45.68,
        currency: "USD"

    },

    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },
    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },
    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },

    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },
    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },
    {
        type: "WINE",
        title: "WINE QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 35.68,
        currency: "USD"

    },

    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },
    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },
    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },

    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },
    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },
    {
        type: "BEER",
        title: "BEER QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 25.68,
        currency: "USD"

    },

    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },

    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },
    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },

    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },

    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },
    {
        type: "DRINKS",
        title: "DRINKS QUATRO STAGIONI",
        description: "Integer ullamcorper neque eu purus euismod",
        price: 15.68,
        currency: "USD"
    },
]
