class Shape {
    calculateArea(): number {
        return 0; // Mặc định trả về 0
    }

    calculatePerimeter(): number {
        return 0; // Mặc định trả về 0
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Tạo các đối tượng từ lớp Rectangle và lớp Circle
const rectangle: Rectangle = new Rectangle(5, 10);
const circle: Circle = new Circle(7);

// Tính và in diện tích và chu vi của các đối tượng
console.log("S hcn:", rectangle.calculateArea());
console.log("C hcn:", rectangle.calculatePerimeter());

console.log("S hình tròn:", circle.calculateArea());
console.log("C hình tròn:", circle.calculatePerimeter());
