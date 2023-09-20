function vacation(input) {

    let neededMoney = Number(input[0]);
    let money = Number(input[1]);

    let index = 2;
    let command = input[index];

    let spendDaysCounter = 0;
    let days = 1;

    while (money <= neededMoney) {

        let spendedMoney = Number(input[index + 1]);

        if (command === "spend") {
            spendDaysCounter++
            money -= spendedMoney;

            if (money < 0) {
                money = 0;
            }

            if (spendDaysCounter === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }

        }

        if (command === "save") {
            spendDaysCounter = 0;
            money += spendedMoney;
            if (money >= neededMoney) {
                break;
            }
        }

        days++;
        index += 2;
        command = input[index];
    }

    if (money >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

