"use strict";
class Calculator {
    calculate(operation, a, b, c, d) {
        const validNumbers = [a, b, c, d].filter(el => el != undefined);
        switch (operation) {
            case "power": return Math.pow(a, b);
            case "log": return Math.log(a) / Math.log(b);
            case "add": return validNumbers.reduce((acc, val) => acc + val);
            case "subtract": return validNumbers.reduce((acc, val) => acc - val);
            case "multiply": return validNumbers.reduce((acc, val) => acc * val);
            case "divide": return validNumbers.reduce((acc, val) => acc / val);
        }
    }
}
const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));
// const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2));
// console.log(calc.calculate('add', 2));
// console.log(calc.calculate('log', 2, 3, 4, 5)); 
// console.log(calc.calculate('multiply', 2, 3, 4, 5, 6));
//# sourceMappingURL=14.%20overloadedCalculator.js.map