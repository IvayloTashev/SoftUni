function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let daysCounter = 0;

    let index = 1;
    let command = input[index];
    let winsCounter = 0;
    let loseCounter = 0;
    let moneyForTheDay = 0;
    let totalMoney = 0;
    let winnerOfTheDay = 0;


    while (command !== "Finish") {
        daysCounter++;
        moneyForTheDay = 0;
        winsCounter = 0;
        loseCounter = 0;

        while (command !== "Finish") {
            let sport = command;
            index++;
            let result = command = input[index];

            if (result === "win") {
                moneyForTheDay += 20;
                winsCounter++;
            } else if (result === "lose") {
                loseCounter++;
            }

            index++;
            command = input[index];
        }

        if (winsCounter > loseCounter) {
            moneyForTheDay *= 1.1;
            winnerOfTheDay++;
        }

        totalMoney += moneyForTheDay;

        if (daysCounter < days) {
            index++;
            command = input[index];
        }

    }

    if (winnerOfTheDay > (days / 2)) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])


