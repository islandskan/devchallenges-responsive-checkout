// 1. cost of products

// currency is in US Dollars
const vintageBackpack = {
    name: 'Vintage Backpack',
    oldPrice: 94.99,
    currentPrice: 54.99,
    get getName() {
        return this.name;
    },
    get getOldPrice() {
        return this.oldPrice;
    },
    get getCurrentPrice() {
        return this.currentPrice;
    },
};

const leviShoes = {
    name: 'Levi Shoes',
    oldPrice: 124.99,
    currentPrice: 74.99,
    get getName() {
        return this.name;
    },
    get getOldPrice() {
        return this.oldPrice;
    },
    get getCurrentPrice() {
        return this.currentPrice;
    },
};

const SHIPPING = 19;

// 2. Function to increment or decrement

/*
div class num
    button class=decrease
    span class=num__input = the value here
    button class=increase
*/
