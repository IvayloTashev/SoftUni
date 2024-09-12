function coffeeLover(arr) {

    let coffeeList = arr.shift().split(` `);
    let NumberOfCommands = Number(arr.shift());


    for (let i = 0; i < NumberOfCommands; i++) {

        let command = arr[i];
        let tokens = command.split(` `);
        let operation = tokens[0];

        if (operation == `Include`) {
            let coffee = tokens[1];
            coffeeList.push(coffee);

        } else if (operation == `Remove`) {
            let position = tokens[1];
            let num = Number(tokens[2]);

            if (coffeeList.length < num) {
                continue;
            } else {

                if (position == `first`) {
                    coffeeList.splice(0, num);
                } else if (position == `last`) {
                    coffeeList.splice(-num);
                }

            }
        } else if (operation == `Prefer`) {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
            
            if ((index1 >= 0 && index1 < coffeeList.length) && (index2 >= 0 && index2 < coffeeList.length)) {
                let buff = coffeeList[index1];
                coffeeList[index1] = coffeeList[index2];
                coffeeList[index2] = buff;
            }


        } else if (operation == `Reverse`) {
            coffeeList.reverse();
        }

    }

    console.log(`Coffees:`);
    console.log(coffeeList.join(` `));

}

coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica", "3", "Include OrdinaryCoffee", "Remove first 1", "Prefer 4 1"])