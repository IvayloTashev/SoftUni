function legendaryFarming(input) {

    let inputArr = input.split(` `);

    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let legendaries = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" }
    let junkMaterials = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let qty = Number(inputArr[i]);
        let material = inputArr[i + 1].toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += qty;

            if (keyMaterials[material] >= 250) {
                console.log(`${legendaries[material]} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }

        } else {

            if (material in junkMaterials) {
                junkMaterials[material] += qty;

            } else {
                junkMaterials[material] = qty;
            }
        }
    }

    let keyMatEntries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [fragment, qty] of keyMatEntries) {
        console.log(`${fragment}: ${qty}`);
    }

    let junkMatEntries = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [fragment, qty] of junkMatEntries) {
        console.log(`${fragment}: ${qty}`);
    }

}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')