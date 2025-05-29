// creating the Pizza class
class Pizza {
    constructor(size, toppings, crust, cheese, sauce, bakeTime) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust || "regular";
        this.cheese = cheese || "mozzarella";
        this.sauce = sauce || "tomato";
        this.bakeTime = bakeTime || 15; // default bake time in minutes
    }

    describe() {
        return `This is a ${this.size} pizza with ${this.toppings} on top.`
    }

    megaDescribe() {
        return `This is a ${this.size} pizza with ${this.toppings} on top, a ${this.crust} crust, ${this.cheese} cheese, and ${this.sauce} sauce. It will be baked for ${this.bakeTime} minutes.`
    }
}

let ourPizza = new Pizza();

console.log("our plain pizza: ", ourPizza.describe())

// setting the size and toppings
ourPizza.size = "large";
ourPizza.toppings = "pepperoni and mushrooms";

// console log the description of the pizza
console.log("our cooked pizza:", ourPizza.describe())

let yourPizza = new Pizza("extra large", "anchovies and onions")

console.log(yourPizza.describe())

let megaPizza = new Pizza("huge", "everything", "stuffed crust", "extra cheese", "BBQ sauce", 30);
console.log(megaPizza.megaDescribe())