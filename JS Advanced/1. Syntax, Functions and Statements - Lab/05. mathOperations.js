function mathOperations(num1, num2, str) {

    switch (str) {
        case "+": console.log(num1 + num2); break;
        case "-": console.log(num1 - num2); break;
        case "*": console.log(num1 * num2); break;
        case "/": console.log(num1 / num2); break;
        case "%": console.log(num1 % num2); break;
        case "**": console.log(num1 ** num2); break;
    }

}

mathOperations(5, 6, '+')

//'+', '-', '*', '/', '%', '**'.