function dungeonestDark(arr) {

    let health = 100;
    let coins = 0;
    let roomsInfo = arr[0];
    let elements = roomsInfo.split(`|`);
    let bestRoomCounter = 1;

    for (let i = 0; i < elements.length; i++) {

        let tokens = [];
        tokens = elements[i].split(` `)

        let command = tokens[0];
        let value = tokens[1];

        if (command == "potion") {

            let heal = Number(value);

            if (health + heal <= 100) {
                health += heal;

            } else {
                heal = 100 - health;
                health += heal;
            }

            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command == "chest") {
            coins += Number(value);
            console.log(`You found ${value} coins.`);

        } else {

            Attack = Number(value);
            health -= Attack;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoomCounter}`);
                break;

            } else {
                console.log(`You slayed ${command}.`);

            }
        }

        bestRoomCounter++;

    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])