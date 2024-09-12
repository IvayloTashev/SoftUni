function counterStrike(arr) {

    let energy = Number(arr.shift());
    wins = 0;

    let command = arr.shift();

    while (command != `End of battle`) {

        let distance = Number(command);

        if (energy <= 0 || energy < distance) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${Math.max(0, energy)} energy`);
            return;
        }

        energy -= distance;

        wins++;

        if (wins % 3 == 0 && wins != 0) {
            energy += wins;
        }

        command = arr.shift();

    }

    console.log(`Won battles: ${wins}. Energy left: ${energy}`);

}

// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"])
// counterStrike(["200", "54", "14", "28", "13", "End of battle"])

