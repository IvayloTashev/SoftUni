function manOWar(arr) {

    let pirateShip = arr.shift().split(`>`).map(Number);
    let warship = arr.shift().split(`>`).map(Number);
    let maxHp = Number(arr.shift());
    let command = arr.shift();

    while (command != `Retire`) {

        let tokens = command.split(` `);
        let operation = tokens[0];

        if (operation == `Fire`) {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (index >= 0 && index < warship.length) {
                warship[index] -= damage;
            }

            if (warship[index] <= 0) {
                console.log(`You won! The enemy ship has sunken.`);
                return;
            }

        } else if (operation == `Defend`) {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);

            if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {

                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }

        } else if (operation == `Repair`) {
            let index = Number(tokens[1]);
            let heal = Number(tokens[2]);

            if (index >= 0 && index < pirateShip.length) {

                if (pirateShip[index] + heal <= maxHp) {
                    pirateShip[index] += heal;
                } else {
                    pirateShip[index] = maxHp;
                }

            }

        } else if (operation == `Status`) {
            let counter = 0;

            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < (maxHp * 0.20)) {
                    counter++;
                }
            }
            console.log(`${counter} sections need repair.`);
        }
        command = arr.shift();
    }

    let pirateShipStatus = 0;
    let warshipStatus = 0;

    for (let num of pirateShip) {
        pirateShipStatus += num;
    }

    for (let num of warship) {
        warshipStatus += num;
    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warshipStatus}`);

}

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])










