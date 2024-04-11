"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name:", this.name);
    }
}
class Students extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
        console.log("id:", this.id);
    }
}
let student1 = new Students("John", 1);
student1.displayInfo();
