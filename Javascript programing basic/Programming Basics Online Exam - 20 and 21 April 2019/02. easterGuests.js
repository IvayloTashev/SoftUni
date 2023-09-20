function easterGuests(input) {

    let guest = Number(input[0]);
    let budget = Number(input[1]);

    let NumberOfEasterBread = Math.ceil(guest / 3);
    let totalPriceForEasterBread = NumberOfEasterBread * 4;
    let NumberOfEggs = guest * 2;
    let totalPriceForEgss = NumberOfEggs * 0.45;

    let totalExpenses = totalPriceForEasterBread + totalPriceForEgss;

    if (budget >= totalExpenses) {
        console.log(`Lyubo bought ${NumberOfEasterBread} Easter bread and ${NumberOfEggs} eggs.`);
        console.log(`He has ${(budget - totalExpenses).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalExpenses - budget).toFixed(2)} lv. more.`);
    }

}

easterGuests([10, 35])