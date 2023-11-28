function starEnigma(input) {

    let msgCount = Number(input.shift());
    let decryptedMessages = [];
    let starPattern = /[star]/gi;

    for (let i = 0; i < msgCount; i++) {

        let match = input[i].match(starPattern);

        if (match) {
            let count = match.length;
            let decryptedMsg = "";

            for (let char of input[i]) {
                let code = char.charCodeAt();
                code -= count;
                decryptedMsg += String.fromCharCode(code);
            }

            decryptedMessages.push(decryptedMsg);

        } else {
            decryptedMsg = input[i];
            decryptedMessages.push(decryptedMsg);
        }

    }

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decryptedMessages) {
        let match = planetPattern.exec(msg);

        if (match) {
            let { name, population, type, soldiers } = match.groups;

            if (type == "A") {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    attackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));

}

starEnigma(['3', "tt(''DGsvywgerx>6444444444%H%1B9444", 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR'])