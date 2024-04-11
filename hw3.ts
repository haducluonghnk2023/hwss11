class Person {
    name: string
    constructor(name: string){
        this.name = name;
    }
    displayInfo():void{
        console.log("Name:", this.name);
    }
}
class Students extends Person {
    id:number;
    constructor(name: string, id:number){
        super(name);
        this.id = id;
        console.log("id:", this.id);
    }
}

let student1 = new Students("John", 1);

student1.displayInfo();