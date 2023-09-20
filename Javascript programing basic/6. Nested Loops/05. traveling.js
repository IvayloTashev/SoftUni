function traveling(input) {

    let destination = input[0];
    let neededMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    let moneyCounter = 0;
    
    while (command !== "End"){

        let money = Number(input[index]);
        moneyCounter += money;

        if (moneyCounter >= neededMoney) {
            console.log(`Going to ${destination}!`);
            moneyCounter = 0;
            index++;
            command = input[index];
                if (command === "End") {
                    break;
                }
            destination = command;
            index++;
            neededMoney = Number(input[index]);
            index++
        } else {
            index++;
            command = input[index];
        }

    }

}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])




