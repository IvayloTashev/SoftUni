function add(num) {

    let sum = num;

    function calc (added) {
        sum += added;
        return calc;
    }

    calc.toString = () => sum;
    return calc;

}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());