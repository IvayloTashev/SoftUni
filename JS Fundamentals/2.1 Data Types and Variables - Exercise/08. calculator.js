function calculator(num1, sign, num2) {

    let sum = 0;

    if (sign == "+") {
        sum = num1 + num2;

    } else if (sign == "-") {
        sum = num1 - num2;

    } else if (sign == "*") {
        sum = num1 * num2;

    } else if (sign == "/") {
        sum = num1 / num2;
    }

    console.log(sum.toFixed(2));

}

calculator(5, '*', 10)