function easterCompetition(input) {

    let competitors = Number(input[0]);
    let index = 1;
    let command = input[index];
    let poitsCounter = 0;
    let bestResult = 0;
    let cometitorCounter = 0;
    let winnarName = "";


    while (command !== "Stop") {

        cometitorCounter++;
        let name = command;
        index++;
        poitsCounter = 0;

        while (command !== "Stop") {

            let points = Number(input[index]);
            poitsCounter += points;
            index++;
            command = input[index];
        }

        console.log(`${name} has ${poitsCounter} points.`);

        if (poitsCounter > bestResult) {
            bestResult = 0;
            bestResult += poitsCounter;
            winnarName = "";
            winnarName += name
            console.log(`${name} is the new number 1!`);

        }

        if (cometitorCounter < competitors) {
            index++;
            command = input[index];
        }

    }

    console.log(`${winnarName} won competition with ${bestResult} points!`);

}

easterCompetition(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])
