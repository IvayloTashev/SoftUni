function ladybugs(arr) {

    let tableSize = arr[0];
    let ladybugsIdxs = arr[1].split(` `).map(Number);
    let table = [];

    for (let i = 0; i < tableSize; i++) {

        if (ladybugsIdxs.includes(i)) {
            table[i] = 1;
        } else {
            table[i] = 0;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j];
        let tokens = command.split(` `);

        let ladybugIndx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!table[ladybugIndx]) {
            continue;

        }

        table[ladybugIndx] = 0;

        if (direction == "left") {
            let newIndx = ladybugIndx - flyLength;

            if (newIndx >= 0) {
                while (table[newIndx] == 1) {
                    newIndx -= flyLength;
                }

                if (newIndx >= 0) {
                    table[newIndx] = 1;
                }
            }
        } else {

            let newIndx = ladybugIndx + flyLength;

            if (newIndx < table.length) {
                while (table[newIndx] == 1) {
                    newIndx += flyLength;
                }

                if (newIndx < table.length) {
                    table[newIndx] = 1;
                }
            }
        }

    }

    console.log(table.join(` `));

}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])