class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription():void {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
class  Electronics extends Product {
    private Brand : string;
    constructor(name: string, price: number, Brand: string) {
        super(name, price);
        this.Brand = Brand;
        // console.log(Brand);
    }
}

const electronics = new Electronics("Electronics", 1000, "Apple");

electronics.getDescription();