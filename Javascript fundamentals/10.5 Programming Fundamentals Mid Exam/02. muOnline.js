function muOnline(str) {

    let hp = 100;
    let bitcoins = 0;

    let arr = str.split(`|`);


    for (let i = 1; i <= arr.length; i++) {

        let command = arr[i - 1];
        let tokens = command.split(` `);
        let operation = tokens[0];
        let num = Number(tokens[1]);

        if (operation == `chest`) {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        } else if (operation == `potion`) {

            if (hp + num <= 100) {
                hp += num;
                console.log(`You healed for ${num} hp.`);
            } else {
                heal = 100 - hp;
                console.log(`You healed for ${heal} hp.`);
                hp = 100;
            }

            console.log(`Current health: ${hp} hp.`);

        } else {
            hp -= num;

            if (hp <= 0) {
                console.log(`You died! Killed by ${operation}.`);
                console.log(`Best room: ${i}`);
                return;

            } else {
                console.log(`You slayed ${operation}.`);
            }

        }

    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${hp}`);

}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")





