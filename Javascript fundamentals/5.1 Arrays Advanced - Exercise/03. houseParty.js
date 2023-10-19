function houseParty(arr) {

    let finalguestsArr = [];

    for (let guest of arr) {

        let tokens = guest.split(` `);
        let name = tokens[0];

        if (!tokens.includes("not")) {

            if (!finalguestsArr.includes(name)) {
                finalguestsArr.push(name);

            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {

            if (finalguestsArr.includes(name)) {
                let index = finalguestsArr.indexOf(name);
                finalguestsArr.splice(index, 1);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(finalguestsArr.join(`\n`));

}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])