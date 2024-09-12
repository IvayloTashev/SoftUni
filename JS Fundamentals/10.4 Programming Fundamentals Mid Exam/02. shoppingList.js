function shoppingList(arr) {

    let shoppingListArr = arr.shift().split(`!`);

    let command = arr.shift();

    while (command != "Go Shopping!") {

        let tokens = command.split(` `);
        let operation = tokens[0];

        //"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
        if (operation == `Urgent`) {
            let item = tokens[1];

            if (!shoppingListArr.includes(item)) {
                shoppingListArr.unshift(item);
            }

            //"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
        } else if (operation == `Unnecessary`) {
            let item = tokens[1];

            if (shoppingListArr.includes(item)) {
                let index = shoppingListArr.indexOf(item);
                shoppingListArr.splice(index, 1);

            }
        
            //"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
        } else if (operation == `Correct`) {
            let oldItem = tokens[1];
            let newItem = tokens[2];

            if (shoppingListArr.includes(oldItem)) {
                let index = shoppingListArr.indexOf(oldItem);
                shoppingListArr.splice(index, 1, newItem);
            }

            //"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
        } else if (operation == `Rearrange`) {
            let item = tokens[1];

            if (shoppingListArr.includes(item)) {
                let index = shoppingListArr.indexOf(item);
                let removedItem = shoppingListArr.splice(index, 1);
                shoppingListArr.push(removedItem);
            }
        }
        command = arr.shift();
    }

    console.log(shoppingListArr.join(`, `));

}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])







