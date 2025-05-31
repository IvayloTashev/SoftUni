"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    sideA;
    SideB;
    constructor(color, sideA, sideB) {
        super(color);
        this.sideA = sideA;
        this.SideB = sideB;
    }
    getArea() {
        return this.sideA * this.SideB;
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
//# sourceMappingURL=09.%20abstractClass.js.map