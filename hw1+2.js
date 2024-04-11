"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("name:", this.name);
        console.log("company:", this.company);
        this.printPhone();
        console.log(12111111111);
    }
    printPhone() {
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
        console.log("teamSize:", this.teamSize);
    }
    printInfo() {
        super.printInfo();
        console.log("teamSize:", this.teamSize);
    }
}
let manager = new Manager("John", "Google", "0123456789", 10);
manager.printInfo();
