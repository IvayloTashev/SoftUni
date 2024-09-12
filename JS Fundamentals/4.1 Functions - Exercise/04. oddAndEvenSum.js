function oddAndEvenSum(num) {

    let numAsStr = String(num);
    let evenSum = 0;
    let oddSum = 0;

    for (let el of numAsStr) {

        let currNum = Number(el);

        if (currNum % 2 == 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234)