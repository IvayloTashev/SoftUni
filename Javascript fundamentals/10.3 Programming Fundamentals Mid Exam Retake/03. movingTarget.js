function movingTarget(arr) {

    let targets = arr.shift().split(` `).map(Number);
    let command = arr.shift()

    while (command != `End`) {

        let tokens = command.split(` `);
        let operation = tokens[0];

        // Shoot {index} {power}"
        // o	Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
        // o	Remove the target if it is shot. A target is considered shot when its value reaches 0.
        if (operation == `Shoot`) {
            let index = Number(tokens[1]);
            let power = Number(tokens[2]);

            if (index < 0 || index >= targets.length) {
                command = arr.shift();
                continue;

            } else {
                targets[index] -= power;

                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

            // "Add {index} {value}"
            // o	Insert a target with the received value at the received index if it exists.
            // o	If not, print: "Invalid placement!"
        } else if (operation == `Add`) {
            let index = Number(tokens[1]);
            let value = Number(tokens[2]);

            if (index < 0 || index >= targets.length) {
                console.log(`Invalid placement!`);
                command = arr.shift();
                continue;

            } else {
                targets.splice(index, 0, value);
            }

            // "Strike {index} {radius}"
            // o	Remove the target at the given index and the ones before and after it depending on the radius.
            // o	If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
        } else if (operation == `Strike`) {
            let index = Number(tokens[1]);
            let radius = Number(tokens[2]);

            if (index - radius < 0 || index + radius >= targets.length) {
                console.log("Strike missed!");
                command = arr.shift();
                continue;

            } else {
                targets.splice(index - radius, radius * 2  + 1);
            }
        }
        command = arr.shift();
    }

    console.log(targets.join(`|`));
}

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

