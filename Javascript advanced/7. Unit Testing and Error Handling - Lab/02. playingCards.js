function playingCards(face, suit) {

    let faceValidator = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    if (!faceValidator.includes(face)) {
        throw new Error("face is not valid");
    }

    let suitValidator = ["S", "H", "D", "C"];
    if (!suitValidator.includes(suit)) {
        throw new Error("suit is not valid");
    }

    let code = ``;
    switch (suit) {
        case "S": code = `\u2660`; break;
        case "H": code = `\u2665 `; break;
        case "D": code = `\u2666 `; break;
        case "C": code = `\u2663 `; break;
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${code}`;
        }
    }

}

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());