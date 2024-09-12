function factorialDivision(num1, num2) {

    let result = 0;

    function numberFactorial(num) {

        let result = 1;

        for (let i = num; i > 1; i--) {

            result *= i;

        }

        return result;

    }

    result = numberFactorial(num1) / numberFactorial(num2);

    console.log(result.toFixed(2));

}

factorialDivision(6, 2)