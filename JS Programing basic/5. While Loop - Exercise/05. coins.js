function coins(input) {

    let change = Number(input[0]);
    let coinsCounter = 0;

    let changeInCoins = Math.floor(change * 100);

    while (changeInCoins !== 0) {

        if (changeInCoins >= 200) {
            coinsCounter++
            changeInCoins -= 200;
            continue;
        }
        if (changeInCoins >= 100) {
            coinsCounter++
            changeInCoins -= 100;
            continue;
        }
        if (changeInCoins >= 50) {
            coinsCounter++
            changeInCoins -= 50;
            continue;
        }
        if (changeInCoins >= 20) {
            coinsCounter++
            changeInCoins -= 20;
            continue;
        }
        if (changeInCoins >= 10) {
            coinsCounter++
            changeInCoins -= 10;
            continue;
        }
        if (changeInCoins >= 5) {
            coinsCounter++
            changeInCoins -= 5;
            continue;
        }
        if (changeInCoins >= 2) {
            coinsCounter++
            changeInCoins -= 2;
            continue;
        }
        if (changeInCoins >= 1) {
            coinsCounter++
            changeInCoins -= 1;
            continue;
        }

    }

    console.log(coinsCounter);

}

coins(["0.05"])