"use strict";
class Vehhicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        return this.speed -= 10;
    }
    speedUp() {
        return this.speed += 10;
    }
    showSpeed() {
        console.log("Speed:", this.speed);
    }
}
class Bicycle extends Vehhicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Vehhicle("Hills", 50, 10);
// console.log(bicycle.speedUp()); //output:50
console.log(bicycle.slowDown()); //output: 40
