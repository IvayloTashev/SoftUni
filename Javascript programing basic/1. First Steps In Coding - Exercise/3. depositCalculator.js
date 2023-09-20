function depositCalculator(input) {

    let deposit = Number(input[0]);
    let termsOfDeposit = Number(input[1]);
    let annualYearIncrease = Number(input[2]);

    let increaseForOneYear = deposit * (annualYearIncrease / 100);
    let increaseForOneMonth = increaseForOneYear / 12;
    let total = deposit + termsOfDeposit * increaseForOneMonth

    console.log(total);

}

depositCalculator(["200 ", "3 ", "5.7 "])