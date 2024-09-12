function walking(input) {

    let index = 0;
    let command = input[index];
    let target = 10000;

    let stepsCounter = 0;

    while (command !== "Going home") {

        let steps = Number(command);
        stepsCounter += steps;

        if (stepsCounter >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsCounter - target} steps over the goal!`);
            break;
        }

        index++
        command = input[index];

    }

    if (stepsCounter <= target) {
        index++
        command = input[index];
        stepsCounter += Number(command);
        if (stepsCounter >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsCounter - target} steps over the goal!`);

        } else {
            console.log(`${Math.abs(stepsCounter - target)} more steps to reach goal.`);
        }
    }
}

walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])



