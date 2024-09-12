function toyShop(input) {

    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let totalCount = puzzles + dolls + bears + minions + trucks;
    totalPrice *= 0.90;

    if (totalCount >= 50) {
        totalPrice *= 0.75;
    }

    if (totalPrice >= trip) {
        console.log(`Yes! ${(totalPrice - trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip - totalPrice).toFixed(2)} lv needed.`);
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

