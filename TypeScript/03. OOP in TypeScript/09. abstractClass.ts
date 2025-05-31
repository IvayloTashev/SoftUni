abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    override getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    sideA: number;
    SideB: number;

    constructor(color: string, sideA: number, sideB: number) {
        super(color);
        this.sideA = sideA;
        this.SideB = sideB;
    }

    override getArea(): number {
        return this.sideA * this.SideB;
    }
}  

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
