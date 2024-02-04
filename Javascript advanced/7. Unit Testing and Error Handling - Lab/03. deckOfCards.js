function deckOfCards(arr) {
    let suit = "";
    let face = "";
    let code = "";
    let result = [];

    for (let card of arr ) {
        let tokens = card.split(``);
        suit = tokens[tokens.length - 1];

        switch (suit) {
            case "S": code = `\u2660`; break;
            case "H": code = `\u2665`; break;
            case "D": code = `\u2666`; break;
            case "C": code = `\u2663`; break;
        }

        if (tokens.length > 2) {
            face = tokens.slice(0, 2).join(``);
        } else {
            face = tokens[0];
        }

        let faceValidator = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (!faceValidator.includes(face)) {
            console.log(`Invalid card: ${face}${suit}`);
            return;
        }
    
        let suitValidator = ["S", "H", "D", "C"];
        if (!suitValidator.includes(suit)) {
            console.log(`Invalid card: ${face}${suit}`);
            return;
        }

        result.push(`${face}${code}`);
    }

    console.log(result.join(` `));

}

// deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])

