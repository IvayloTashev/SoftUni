
function partyTime(input) {

    let [regularList, vipList] = [[], []]

    let command = input.shift();

    while (command != `PARTY`) {
        let firstChar = command.charCodeAt(0);
 
        if (firstChar >= 48 && firstChar <= 57) {
            vipList.push(command);
 
        } else {
            regularList.push(command);
        }

        command = input.shift();
    }

    for (let element of input) {
        
        if (vipList.includes(element)) {
            let index = vipList.indexOf(element);
            vipList.splice(index, 1)
        }

        if (regularList.includes(element)) {
            let index = regularList.indexOf(element);
            regularList.splice(index, 1)
        }
    }

    let nonAppearanceCount = regularList.length + vipList.length;

    console.log(nonAppearanceCount);

    for (let guest of vipList) {
        console.log(guest);
    }

    for (let guest of regularList) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])