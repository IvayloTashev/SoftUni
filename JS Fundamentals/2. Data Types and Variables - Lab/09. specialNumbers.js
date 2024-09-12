function specialNumbers(num) {

    let sum = 0;

    for (let i = 1; i <= num; i++) {

        sum = 0;

        let numAsString = String(i);

        for (let j = 0; j < numAsString.length; j++) {
            sum += Number(numAsString[j]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15)