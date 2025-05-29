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


// factory method for cars
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving!`)
    }

    // factory method to create a car
    static createCar(make, model, year) {
        return new Car(make, model, year);
    }
}

let myCar = new Car("Dodge", "Ram", 2015)

myCar.drive();

let yourCar = Car.createCar("Toyota", "Camry", 2020);
let thereCar = Car.createCar("Honda", "Civic", 2018);
let hisCar = Car.createCar("Ford", "Mustang", 2021);
let herCar = Car.createCar("Chevrolet", "Malibu", 2019);
let jimmyCar = Car.createCar("Nissan", "Altima", 2022);
yourCar.drive();
thereCar.drive();
hisCar.drive();
herCar.drive();
jimmyCar.drive();
