function circle() {

    class Circle {

        constructor(radius) {
            this.radius = radius
        }

        get area() {
            return Math.PI * Math.pow(this._radius, 2);
        }

        get diameter() {
            return this._radius * 2;
        }

        set diameter(diameter) {
            this._radius = diameter / 2;
        }

        get radius() {
            return this._radius;
        }

        set radius(radius) {
            this._radius = radius;
        }
    }

    let c = new Circle(2);
    console.log(`Radius: ${c.radius}`);
    console.log(`Diameter: ${c.diameter}`);
    console.log(`Area: ${c.area}`);
    c.diameter = 1.6;
    console.log(`Radius: ${c.radius}`);
    console.log(`Diameter: ${c.diameter}`);
    console.log(`Area: ${c.area}`);
}

circle()

