function arrayManipulations(arr) {

    let newArr = [];
    newArr = arr[0].split(` `).map(Number);

    for (let i = 1; i < arr.length; i++) {

        let command = arr[i];
        tokens = command.split(` `);
        let operation = tokens[0];
        let num = Number(tokens[1]);
        let num2 = Number(tokens[2]);

        switch (operation) {
            
            case `Add`: newArr.push(num); break;

            case `RemoveAt`: newArr.splice(num, 1); break;

            case `Insert`: newArr.splice(num2, 0, num); break;

            case `Remove`: newArr = newArr.filter(el => el != num); break;

        }

    }

    console.log(newArr.join(` `));

}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])