function arrayModifier(arr) {

    let modifiedArr = arr[0].split(` `).map(Number);

    let index = 1;
    let command = arr[index];

    while (command != "end") {

        let tokens = command.split(` `);
        let operation = tokens[0];
        let num1 = tokens[1];
        let num2 = tokens[2];

        // •	"swap {index1} {index2}" takes two elements and swap their places.
        if (operation == `swap`) {
            let buff = modifiedArr[num1];
            modifiedArr[num1] = modifiedArr[num2];
            modifiedArr[num2] = buff;

            // •	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
        } else if (operation == `multiply`) {
            let product = modifiedArr[num1] * modifiedArr[num2];
            modifiedArr[num1] = product;

            // •	"decrease" decreases all elements in the array with 1.
        } else if (operation == `decrease`) {

            for (let i = 0; i < modifiedArr.length; i++) {
                let decreasedValue = modifiedArr[i] - 1;
                modifiedArr[i] = decreasedValue;
            }
        }

        index++;
        command = arr[index];
    }

    console.log(modifiedArr.join(`, `));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])



