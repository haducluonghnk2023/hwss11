class Vehhicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown():number {
        return this.speed -= 10;
    }
    speedUp():number {
        return this.speed += 10;
    }
    showSpeed():void {
        console.log("Speed:", this.speed);
    }
}
class Bicycle extends Vehhicle {
    private gear :number;
    constructor(name: string, speed: number, id: number,gear:number) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Vehhicle("Hills",50,10);
// console.log(bicycle.speedUp()); //output:50
console.log(bicycle.slowDown()); //output: 40



