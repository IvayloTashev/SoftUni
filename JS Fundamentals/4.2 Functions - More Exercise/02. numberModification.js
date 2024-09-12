function numberModification(num) {

    let numAsString = String(num);
    let average = 0;

    while (average < 5) {

        let sum = 0;
        let digitCounter = 0;

        for (let i = 0; i < numAsString.length; i++) {

            digitCounter++;
            let currNum = Number(numAsString[i]);
            sum += currNum;
        }

        average = sum / digitCounter;

        if (average < 5) {
            numAsString += "9"
        }

    }

    console.log(numAsString);

}

numberModification(101)