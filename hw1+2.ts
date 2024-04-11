class Employee {
    name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
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
    private printPhone() {
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    teamSize : number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
        console.log("teamSize:", this.teamSize);
    }
    printInfo() {
        super.printInfo();
        console.log("teamSize:", this.teamSize);
    }
}

let manager = new Manager("John", "Google", "0123456789",10);
manager.printInfo()
