const SHIPPING = 19;
const totalEl = document.querySelector('#total-cost');
const numInputsValue = document.querySelectorAll('.num__input');

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

// 2. Function to increment or decrement
const numInputs = document.querySelectorAll('.num');
for (const num of numInputs) {
    num.addEventListener('click', (e) => {
        if (num.previousElementSibling.children) {
            let productName =
                num.previousElementSibling.children.item(0).textContent;
            console.log(productName);
        }
        if (e.target.matches('.decrease')) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.value--;
            }
            if (e.target.nextElementSibling.value < 1) {
                e.target.nextElementSibling.value = 1;
                return;
            }
        } else if (e.target.matches('.increase')) {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.value++;
            }
        }

        return;
    });
}

// function to add or sub from total cost

const getTotalCost = (product, numValue) => {
    const totalCost = product.getCurrentPrice * numValue + SHIPPING;
    return totalCost.toFixed(2);
};

const addTotalCost = (cost) => {
    totalEl.textContent = cost;
};

addTotalCost(`$${getTotalCost(vintageBackpack, 2)}`);

console.log(`$${getTotalCost(vintageBackpack, 2)}`);
console.log(`$${getTotalCost(leviShoes, 4)}`);
