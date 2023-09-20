function averageNumber(input) {

    let numbers = Number(input[0])
    let sum = 0;
    let numCounter = 0;

    for (let i = 1; i < input.length; i++) {

        let currentNumber = Number(input[i]);
        sum += currentNumber;
        numCounter++
    }

    console.log((sum / numCounter).toFixed(2));

}

averageNumber(["4", "95", "23", "76", "23"])