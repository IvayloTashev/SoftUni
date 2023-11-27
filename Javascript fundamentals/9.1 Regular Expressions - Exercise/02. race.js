function race(input) {
    
    let names = input.shift().split(`, `);
    let command = input.shift();
    let racersList = {};
    let letterPattern = /[A-Za-z]/g;
    let numbersPattern = /\d/g;

    names.forEach((name) => racersList[name] = 0);

    while (command != `end of race`) {

        let nameMatch = command.match(letterPattern);
        let curName = nameMatch.join(``);

        let totalDistance = 0;
        let numMatch = command.match(numbersPattern);

        for (let num of numMatch) {
            totalDistance += Number(num);
        }

        if (curName in racersList) {
            racersList[curName] += totalDistance;
        }

        command = input.shift();
    }

    let winners = Object.entries(racersList).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${winners[0][0]}`);
    console.log(`2nd place: ${winners[1][0]}`);
    console.log(`3rd place: ${winners[2][0]}`);

}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])