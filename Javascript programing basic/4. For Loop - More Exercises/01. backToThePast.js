function backToThePast(input) {

    let money = Number(input[0]);
    let year = Number(input[1]);
    let IvanchoYears = 18;
    let expenses = 0;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            IvanchoYears++
            expenses += 12000;
        } else {
            expenses += 12000 + 50 * IvanchoYears
            IvanchoYears++
        }

    }
    if (money >= expenses) {
        console.log(`Yes! He will live a carefree life and will have ${(money - expenses).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(expenses - money).toFixed(2)} dollars to survive.`);
    }
}

backToThePast([100000.15, 1808])
