"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, Brand) {
        super(name, price);
        this.Brand = Brand;
        // console.log(Brand);
    }
}
const electronics = new Electronics("Electronics", 1000, "Apple");
electronics.getDescription();
