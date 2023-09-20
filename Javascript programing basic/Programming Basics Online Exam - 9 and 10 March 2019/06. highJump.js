function highJump(input) {

    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    let attemptCounter = 0;
    let failAttemptCounter = 0;
    let isFailed = false;
    let currentaTarget = target - 30;
    let currentaAttempt = 0;

    while (command) {

        currentaAttempt = Number(command);
        attemptCounter++;

        while (currentaAttempt <= currentaTarget) {
            failAttemptCounter++;
            index++;
            currentaAttempt = Number(input[index]);

            if (failAttemptCounter === 3) {
                isFailed = true;
                break;
            } else {
                attemptCounter++;
            }

        }

        if (isFailed) {
            console.log(`Tihomir failed at ${currentaTarget}cm after ${attemptCounter} jumps.`);
            break;
        }

        if (currentaTarget >= target) {
            break;
        }

        failAttemptCounter = 0;
        currentaTarget += 5;
        index++;
        command = input[index];

    }

    if (isFailed === false) {
        console.log(`Tihomir succeeded, he jumped over ${currentaTarget}cm after ${attemptCounter} jumps.`);
    }

}

highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])

