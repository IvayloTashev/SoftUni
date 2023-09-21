function sumOfOddNumbers(num) {

    let counter = 0;
    let buffer = 0;

    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        counter++;
        buffer += i;

        if (counter === num) {
            break;
        }
    }

    console.log(`Sum: ${buffer}`);

}

sumOfOddNumbers(5)