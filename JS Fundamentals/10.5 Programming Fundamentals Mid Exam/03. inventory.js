function inventory(arr) {

    let inventory = arr.shift().split(`, `);

    let command = arr.shift();

    while (command != "Craft!") {

        let tokens = command.split(` - `);
        let operation = tokens[0];
        let item = tokens[1];

        //"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
        if (operation == `Collect`) {

            if (!inventory.includes(item)) {
                inventory.push(item);
            }

            //"Drop - {item}" - you should remove the item from your inventory if it exists.
        } else if (operation == `Drop`) {

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

            //"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
        } else if (operation == `Combine Items`) {

            let items = tokens[1].split(`:`)
            let oldItem = items[0];
            let newItem = items[1];

            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1, 0, newItem)
            }

            //"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
        } else if (operation == `Renew`) {

            if (inventory.includes(item)){
                let index = inventory.indexOf(item);
                let renewedItem = inventory.splice(index, 1);
                inventory.push(renewedItem);
            }

        }

        command = arr.shift();
    }

    console.log(inventory.join(`, `));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
  





