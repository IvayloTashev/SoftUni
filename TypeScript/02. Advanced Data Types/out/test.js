"use strict";
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    saysHello() {
        return `${this.firstName} says hello`;
    }
}
let Person1 = new Person("Gosho", "Abysa");
console.log(Person1.saysHello());
//# sourceMappingURL=test.js.map