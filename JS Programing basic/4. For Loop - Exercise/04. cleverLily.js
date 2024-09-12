function cleverLily(input) {

    let LilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let savedMoney = 0;
    let stolenMoney = 0;
    let toysCount = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= LilisAge; currentAge++) {
        if (currentAge % 2 === 0) {
            stolenMoney++;
            savedMoney += addMoney;
            addMoney += 10;
        } else {
            toysCount++;
        }
    }

    let totalToysPrice = toysCount * toyPrice;
    let totalSavedMoney = savedMoney + totalToysPrice - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }

}

cleverLily(["10", "170.00", "6"])
