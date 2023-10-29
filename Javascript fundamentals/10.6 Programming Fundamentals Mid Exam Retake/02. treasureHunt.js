function treasureHunt(arr) {

    let lootArr = arr.shift().split(`|`);

    let command = arr.shift();


    while (command != `Yohoho!`) {
        let tokens = command.split(` `);
        let operation = tokens[0];

        if (operation == `Loot`) {

            for (let i = 1; i < tokens.length; i++) {
                let item = tokens[i];

                if (!lootArr.includes(item)) {
                    lootArr.unshift(item);
                }
            }

        } else if (operation == `Drop`) {
            let index = Number(tokens[1]);

            if (index >= 0 && index < lootArr.length) {
                let dropedItem = lootArr.splice(index, 1);
                lootArr.push(dropedItem);
            }

        } else if (operation == `Steal`) {
            let count = Number(tokens[1]);
            let stolenItems = lootArr.splice(-count);
            console.log(stolenItems.join(`, `));
        }
        command = arr.shift();
    }

    let totalGain = 0;
    let itemsCount = 0;

    for (let i = 0; i < lootArr.length; i++) {
        let currentItem = Number(lootArr[i].length);
        totalGain += currentItem;
        itemsCount++;
    }

    let averageGein = totalGain / itemsCount;

    if (itemsCount != 0) {
        console.log(`Average treasure gain: ${averageGein.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }

}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])



