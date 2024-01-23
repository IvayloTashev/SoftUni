function heroicInventory(input) {

    let heroes = {};
    let result = [];

    for (let heroInfo of input) {
        tokens = heroInfo.split(` / `);
        let name = tokens.shift();
        let level = Number(tokens.shift());
        items = tokens.toString().split(`, `).filter(x => x.length > 0);

        if (items.length > 0) {
            heroes = { name: name, level: level, items: [...items] };
        } else {
            heroes = { name: name, level: level, items: [] };
        }

        result.push(heroes);

    }

    console.log(JSON.stringify(result));

}

heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)