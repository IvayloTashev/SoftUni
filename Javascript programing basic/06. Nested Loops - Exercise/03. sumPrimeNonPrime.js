function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    let primeNumberSum = 0;
    let nonPrimeNumberSum = 0;
    let devisorCounter = 0;

    while (command !== "stop") {

        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            continue;
        }

        for (let i = 2; i < currentNum; i++) {

            if (currentNum % i === 0) {
                devisorCounter++;
            }

        }

        if (devisorCounter > 0) {
            nonPrimeNumberSum += currentNum;
            devisorCounter = 0;
        } else {
            primeNumberSum += currentNum;
            devisorCounter = 0;
        }

        index++;
        command = input[index];

    }

    console.log(`Sum of all prime numbers is: ${primeNumberSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumberSum}`);

}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])

