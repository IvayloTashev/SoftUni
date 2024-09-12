function lettersChangeNumbers(input) {

    let combination = input.split(` `).filter(x => x != 0);
    let result = 0;

    for (let element of combination) {
        let firstLetter = element[0];
        let lastLetter = element[element.length - 1];
        let num = Number(element.slice(1, element.length - 1));

        if (firstLetter == firstLetter.toUpperCase()) {
            let position = firstLetter.charCodeAt() - 64;
            num /= position;

        } else {
            let position = firstLetter.charCodeAt() - 96;
            num *= position;
        }

        if (lastLetter == lastLetter.toUpperCase()) {
            let position = lastLetter.charCodeAt() - 64;
            num -= position;

        } else {
            let position = lastLetter.charCodeAt() - 96;
            num += position;
        }

        result += num;
        
    }

    console.log(result.toFixed(2));

}

lettersChangeNumbers('A12b   s17G')

// First, you start with the letter before the number:
// • If it's uppercase you divide the number by the letter's position in the alphabet
// • If it's lowercase you multiply the number with the letter's position in the alphabet
// Then you move to the letter after the number:
// • If it's uppercase you subtract its position from the resulted number
// • If it's lowercase you add its position to the resulted number