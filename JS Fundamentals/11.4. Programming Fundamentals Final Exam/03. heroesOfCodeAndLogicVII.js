function heroesOfCodeAndLogicVII(input) {
    let num = input.shift();
    let party = {};

    for (let i = 0; i < num; i++) {
        let [name, hp, mp] = input.shift().split(` `);
        hp = Number(hp);
        mp = Number(mp);

        let hero = { hp: hp, mp: mp };
        party[name] = hero;
    }

    let command = input.shift();

    while (command != "End") {
        let tokens = command.split(` - `);
        let operation = tokens.shift();
        let name = tokens.shift();

        if (operation == "CastSpell") {
            let mpCost = Number(tokens.shift());
            let spell = tokens.shift();

            if (party[name]["mp"] >= mpCost) {
                party[name]["mp"] -= mpCost;
                console.log(`${name} has successfully cast ${spell} and now has ${party[name]["mp"]} MP!`);

            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }

        } else if (operation == "TakeDamage") {
            let damage = Number(tokens.shift());
            let mob = tokens.shift();

            if (party[name]["hp"] - damage > 0) {
                party[name]["hp"] -= damage;
                console.log(`${name} was hit for ${damage} HP by ${mob} and now has ${party[name]["hp"]} HP left!`);

            } else {
                console.log(`${name} has been killed by ${mob}!`);
                delete party[name];
            }

        } else if (operation == "Recharge") {
            let recharge = Number(tokens.shift());

            if (party[name]["mp"] + recharge > 200) {
                recharge = 200 - party[name]["mp"];
            } 

            party[name]["mp"] += recharge;

            console.log(`${name} recharged for ${recharge} MP!`);

        } else if (operation == "Heal") {
            let heal = Number(tokens.shift());

            if (party[name]["hp"] + heal > 100) {
                heal = 100 - party[name]["hp"];
            } 

            party[name]["hp"] += heal;

            console.log(`${name} healed for ${heal} HP!`);

        }

        command = input.shift();
    }

    for (hero in party) {
        console.log(hero);
        console.log(`  HP: ${party[hero]["hp"]}`);
        console.log(`  MP: ${party[hero]["mp"]}`);
    }

}

heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])

    // heroesOfCodeAndLogicVII([
    //     "4",
    //     "Adela 90 150",
    //     "SirMullich 70 40",
    //     "Ivor 1 111",
    //     "Tyris 94 61",
    //     "Heal - SirMullich - 50",
    //     "Recharge - Adela - 100",
    //     "CastSpell - Tyris - 1000 - Fireball",
    //     "TakeDamage - Tyris - 99 - Fireball",
    //     "TakeDamage - Ivor - 3 - Mosquito",
    //     "End"
    //     ])
        