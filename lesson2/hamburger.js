class Hamburger {
    constructor(size, stuffing, topping =  {price: 0, calorie: 0}) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
    }

    calculatePrice() {
        return this.size.price + this.stuffing.price + this.topping.price;
    }
    calculateCalorie() {
        return this.size.calorie + this.stuffing.calorie + this.topping.calorie;
    }
}

class Size {
    constructor(price, calorie) {
        this.price = price;
        this.calorie = calorie;
    }
}
let big = new Size(100, 40);
let small = new Size(50, 20);

class Stuffing {
    constructor(price, calorie) {
        this.price = price;
        this.calorie = calorie;
    }
}
let cheese = new Stuffing(10, 20);
let salad = new Stuffing(20, 5);
let potato = new Stuffing(15, 10);

class Topping {
    constructor(price, calorie) {
        this.price = price;
        this.calorie = calorie;
    }
}
let spices = new Topping(15, 0);
let mayo = new Topping(20, 5);

let bigCheeseHamMayo = new Hamburger(big, cheese, mayo);
let smallPotatoHam = new Hamburger(small, potato);
console.log(bigCheeseHamMayo.calculatePrice());
console.log(smallPotatoHam.calculateCalorie());


//
// let sizeVar = [
//     {big: {price: 100, calorie: 40,}},
//     {small: {price: 50, calorie: 20,}},
// ]

// let stuffingVar = [
//     {cheese: {price: 10, calorie: 20,}},
//     {salad: {price: 20, calorie: 5,}},
//     {potato: {price: 15, calorie: 10,}},
// ]
// let toppingVar = [
//     {spices: {price: 15, calorie: 0,}},
//     {mayo: {price: 20, calorie: 5,}},
// ]

