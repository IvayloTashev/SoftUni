/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let numAsArr = String(num).split("").reverse();
    let result = [];

    let x = 1;

    for (let currNum of numAsArr) {
        
        if (Number(currNum) > 0) {
            let currentNum = Number(currNum) * x
            result.unshift(currentNum)
        }

        x *= 10;
    }

    return result.join(" + ");
}

expandedForm(12);
expandedForm(42);
expandedForm(70304);
