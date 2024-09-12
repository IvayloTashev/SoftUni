function calculator() {

    let firstNum;
    let secondNum;
    let result;

    function init(selector1, selector2, resultSelector) {
        firstNum = document.querySelector(selector1);
        secondNum = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    };

    function add() {
        let sum = Number(firstNum.value) + Number(secondNum.value);
        result.value = sum;
    };

    function subtract() {
        let sum = Number(firstNum.value) - Number(secondNum.value);
        result.value = sum;
    };

    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



