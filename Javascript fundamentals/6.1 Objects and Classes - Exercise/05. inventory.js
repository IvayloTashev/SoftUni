function inventory(input) {
    let heroRegister = [];

    for (let data of input) {
        let [name, level, ...items] = data.split(` / `);
        let heroObj = {
            name: name,
            level: Number(level),
            items: items.length > 0 ? items[0].split(`, `) : []
        };
        heroRegister.push(heroObj);
    }

    heroRegister.sort((a, b) => a.level - b.level);

    for (hero of heroRegister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        if (hero.items.length > 0) {
            console.log(`items => ${hero.items.join(`, `)}`);
        }
    }
}

inventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])