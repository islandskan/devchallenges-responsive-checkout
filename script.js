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
const numInputs = document.querySelectorAll('.num');
for (const num of numInputs) {
    num.addEventListener('click', (e) => {
        if (e.target.matches('.decrease')) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.value--;
            }
        } else if (e.target.matches('.increase')) {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.value++;
            }
        }
        return;
    });
}

// .addEventListener('click', function (e) {
//     console.log(e.target.getAttribute('class') + ' is clicked');

//     const target = e.target;

//     if (target.matches('button.decrease')) {
//         console.log(target);
//     }
// });
