function cinema(input) {

    let typePrijection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalIncome = 0;

    switch (typePrijection) {
        case "Premiere": totalIncome = rows * columns * 12; break;
        case "Normal": totalIncome = rows * columns * 7.50; break;
        case "Discount": totalIncome = rows * columns * 5; break;
    }

    console.log(`${totalIncome.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"])
