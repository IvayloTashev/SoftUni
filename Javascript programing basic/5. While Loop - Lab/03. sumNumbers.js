function sumNumbers(input) {

    let index = 0;
    let sumOfNumbers = Number(input[index]);
    index++;

    let currentNumber = Number(input[index]);
    index++

    let sum = 0;

    while (sum < sumOfNumbers) {

        sum += currentNumber;

        currentNumber = Number(input[index]);
        index++

    }

    console.log(sum);

}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

