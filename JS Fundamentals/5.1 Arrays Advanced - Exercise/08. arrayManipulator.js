function arrayManipulator(numsArr, commandsArr) {

    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i].split(` `);

        let operation = command[0];

        if (operation == "add") {
            let index = Number(command[1]);
            let element = Number(command[2]);

            numsArr.splice(index, 0, element);

        } else if (operation == "addMany") {
            let index = Number(command[1]);

            for (let j = 2; j < command.length; j++) {
                let element = Number(command[j]);
                numsArr.splice(index, 0, element)
                index++;
            }

        } else if (operation == "contains") {
            let element = Number(command[1]);
            let index = numsArr.indexOf(element);
            console.log(index);

        } else if (operation == "remove") {
            let index = Number(command[1]);
            numsArr.splice(index, 1)

        } else if (operation == "shift") {
            let rotations = Number(command[1]);

            for (let k = 1; k <= rotations; k++) {
                let element = numsArr.shift();
                numsArr.push(element);
            }

        } else if (operation == "sumPairs") {

            let sumPairsArr = [];

            for (let l = 0; l < numsArr.length; l += 2) {
                let sum = 0;

                if (l + 1 < numsArr.length) {
                    let firstNum = Number(numsArr[l]);
                    let secondNum = Number(numsArr[l + 1]);
                    sum = firstNum + secondNum;
                    sumPairsArr.push(sum);

                } else {
                    let firstNum = Number(numsArr[l]);
                    sumPairsArr.push(firstNum);
                }

            }

            numsArr = sumPairsArr;

        } else if (operation == "print") {
            console.log(`[ ${numsArr.join(`, `)} ]`);
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['sumPairs', 'contains 15', 'remove 3', 'shift 1', 'print'])
