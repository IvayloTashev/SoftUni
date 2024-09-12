function addAndSubtract(num1, num2, num3) {

    function sum (a, b) {
        let sum = a + b;
        return sum;
    }

    function subtract (x, y) {
        let subtract = x - y;
        return subtract;
    }

    let sumFirstTwoChar = sum(num1, num2);
    let result = subtract(sumFirstTwoChar, num3)

    console.log(result);
}

addAndSubtract(23,
    6,
    10
    )