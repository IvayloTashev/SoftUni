function lunchBreak(input) {

    let series = input[0];
    let seriesDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = breakDuration / 8;
    let restDuration = breakDuration / 4;

    let freeTime = breakDuration - lunchDuration - restDuration;

    if (freeTime >= seriesDuration) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(freeTime - seriesDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(seriesDuration - freeTime)} more minutes.`);
    }

}

lunchBreak(["Teen Wolf",
    "48",
    "60"])
