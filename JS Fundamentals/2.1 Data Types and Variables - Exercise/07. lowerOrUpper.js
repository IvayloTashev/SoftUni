function lowerOrUpper(char) {

    let charAsNum = char.charCodeAt();

    if (charAsNum >= 65 && charAsNum <= 90) {
        charAsNum = `upper-case`;
    } else {
        charAsNum = `lower-case`;
    }

console.log(charAsNum);

}

lowerOrUpper(`a`)