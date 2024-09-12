function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let suitcasesCounter = 0;
    let index = 1;
    let command = input[index];

    while (command !== "End") {

        let currentSuitcaseVolume = Number(command);

        suitcasesCounter++;

        if (suitcasesCounter % 3 === 0) {
            currentSuitcaseVolume *= 1.1;
        }

        if (capacity > currentSuitcaseVolume) {
            capacity -= currentSuitcaseVolume;

        } else if (capacity < currentSuitcaseVolume) {
            capacity -= currentSuitcaseVolume;
            suitcasesCounter--;
            console.log(`No more space!`);
            break;
        }

        index++;
        command = input[index];

    }

    if (capacity >= 0){
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);

}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
