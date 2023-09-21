function bitcoinMining(input) {

    let daysCounter = 0;
    let goldMined = 0;
    let goldPeice = 67.51;
    let totalMoney = 0;
    let bitcoinPrice = 11949.16;
    let dayOfFirstBitcoin = 0;
    let bitcoins = 0;


    for (let i = 0; i < input.length; i++) {
        daysCounter++;

        if (daysCounter % 3 == 0) {
            goldMined += input[i] * 0.70;
            totalMoney += goldMined * goldPeice
            goldMined = 0;

        } else {
            goldMined += input[i];
            totalMoney += goldMined * goldPeice
            goldMined = 0;
        }

        if (totalMoney >= bitcoinPrice) {
            bitcoins++;
            totalMoney -= bitcoinPrice;

            if (bitcoins == 1) {
                dayOfFirstBitcoin += daysCounter;
            }
        }
    }

    if (totalMoney >= bitcoinPrice) {
        let additionalBitcoins = 0;
        additionalBitcoins = totalMoney / bitcoinPrice;
        bitcoins += Math.floor(additionalBitcoins);
        totalMoney -= Math.floor(additionalBitcoins) * bitcoinPrice;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (dayOfFirstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124])
