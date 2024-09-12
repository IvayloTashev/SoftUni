function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let itsFound = false;

    for (let a = start; a <= end; a++) {

        for (let b = start; b <= end; b++) {
            counter++;
            
            if ((a + b) === magicNumber) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                itsFound = true;
                break;
            }

        }

        if (itsFound) {
            break;
        }

    }

    if (itsFound === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["1",
    "10",
    "5"])
