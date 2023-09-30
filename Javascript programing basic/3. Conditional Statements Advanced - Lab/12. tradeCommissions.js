function tradesalesAmounts(input) {

    let town = input[0];
    let salesAmount = Number(input[1]);

    let commission = 0;

    if (salesAmount > 10000) {
        switch (town) {
            case "Sofia": commission = salesAmount * 0.12; console.log(commission.toFixed(2)); break;
            case "Varna": commission = salesAmount * 0.13; console.log(commission.toFixed(2)); break;
            case "Plovdiv": commission = salesAmount * 0.145; console.log(commission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount > 1000) {
        switch (town) {
            case "Sofia": commission = salesAmount * 0.08; console.log(commission.toFixed(2)); break;
            case "Varna": commission = salesAmount * 0.10; console.log(commission.toFixed(2)); break;
            case "Plovdiv": commission = salesAmount * 0.12; console.log(commission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount > 500) {
        switch (town) {
            case "Sofia": commission = salesAmount * 0.07; console.log(commission.toFixed(2)); break;
            case "Varna": commission = salesAmount * 0.075; console.log(commission.toFixed(2)); break;
            case "Plovdiv": commission = salesAmount * 0.08; console.log(commission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (salesAmount >= 0) {
        switch (town) {
            case "Sofia": commission = salesAmount * 0.05; console.log(commission.toFixed(2)); break;
            case "Varna": commission = salesAmount * 0.045; console.log(commission.toFixed(2)); break;
            case "Plovdiv": commission = salesAmount * 0.055; console.log(commission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}

tradesalesAmounts(["Sofia",
    "1500"])




