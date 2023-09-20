function reportSystem(input) {

    let target = Number(input[0]);
    let transferCounter = 1;
    let transferCardCounter = 0;
    let transferCashCounter = 0;
    let cardPayment = 0;
    let cashPayment = 0;
    let totalIncome = 0;
    let Succses = false;

    let index = 1;
    let command = input[index];

    while (command !== "End") {

        let currentPayment = Number(command);

        if (transferCounter % 2 === 0) {


            if (currentPayment < 10) {
                console.log(`Error in transaction!`);

            } else {
                cardPayment += currentPayment;
                totalIncome += currentPayment;
                transferCardCounter++;
                console.log(`Product sold!`);
            }

        } else {

            if (currentPayment > 100) {
                console.log(`Error in transaction!`);

            } else {
                cashPayment += currentPayment;
                totalIncome += currentPayment;
                transferCashCounter++;
                console.log(`Product sold!`);
            }
        }

        if (totalIncome >= target) {
            console.log(`Average CS: ${(cashPayment / transferCashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(cardPayment / transferCardCounter).toFixed(2)}`);
            Succses = true;
            break;
        }

        index++;
        command = input[index]
        transferCounter++;
    }

    if (Succses === false) {
        console.log(`Failed to collect required money for charity.`);
    }

}

reportSystem(["500", "120", "8", "63", "256", "78", "317"])