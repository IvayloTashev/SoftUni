function shootForTheWin(arr) {

    let targets = arr.shift().split(` `).map(Number);
    let count = 0;
    let command = arr.shift();

    while (command != `End`) {

        let index = Number(command);

        if (index < 0 || index >= targets.length || targets[index] == -1) {
            command = arr.shift();
            continue;
        }

        let targetHp = targets[index];
        targets[index] = -1;
        count++

        for (let i = 0; i < targets.length; i++) {

            //Reduce all the other targets, which have greater values than your current target, with its value.
            if (targets[i] > targetHp) {
                targets[i] -= targetHp;

                //Increase all the other targets, which have less than or equal value to the shot target, with its value.
            } else if (targets[i] <= targetHp && targets[i] != -1) {
                targets[i] += targetHp;
            }

        }

        command = arr.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(` `)}`);

}

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])





