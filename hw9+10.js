"use strict";
class Shape {
    calculateArea() {
        return 0; // Mặc định trả về 0
    }
    calculatePerimeter() {
        return 0; // Mặc định trả về 0
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// Tạo các đối tượng từ lớp Rectangle và lớp Circle
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);
// Tính và in diện tích và chu vi của các đối tượng
console.log("S hcn:", rectangle.calculateArea());
console.log("C hcn:", rectangle.calculatePerimeter());
console.log("S hình tròn:", circle.calculateArea());
console.log("C hình tròn:", circle.calculatePerimeter());
