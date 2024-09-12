function easterParty(input) {

    let guests = Number(input[0]);
    let fee = Number(input[1]);
    let budget = Number(input[2]);

    let cakePrice = budget * 0.10;

    if (guests >= 10 && guests <= 15) {
        fee *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        fee *= 0.80;
    } else if (guests > 20) {
        fee *= 0.75;
    }

    let totalExpenses = (guests * fee) + cakePrice;

    if (budget >= totalExpenses) {
        console.log(`It is party time! ${(budget - totalExpenses).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalExpenses - budget).toFixed(2)} leva needed.`);
    }

}

easterParty([8, 25, 340])