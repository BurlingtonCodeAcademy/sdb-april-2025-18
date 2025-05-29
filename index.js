// creating the Pizza class
class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }

    describe() {
        return `This is a ${this.size} pizza with ${this.toppings} on top.`
    }
}

let ourPizza = new Pizza();

// setting the size and toppings
ourPizza.size = "large";
ourPizza.toppings = "pepperoni and mushrooms";

// console log the description of the pizza
console.log(ourPizza.describe())