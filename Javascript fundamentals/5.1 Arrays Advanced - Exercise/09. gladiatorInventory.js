function gladiatorInventory(arr) {

    let inventory = arr[0].split(` `);

    for (let i = 1; i < arr.length; i++) {
        let command = arr[i];

        tokens = command.split(` `);
        let operation = tokens[0];
        let item = tokens[1];

        // If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
        if (operation == "Buy") {

            if (!inventory.includes(item)) {
                inventory.push(item)
            }

        // If you receive the Trash command, delete the equipment if it exists.
        } else if (operation == "Trash") {

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        // If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
        } else if (operation == "Repair") {
            
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
                inventory.push(item);
            }

        // If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".
        } else if (operation == "Upgrade") {

            let upgradeTokens = item.split(`-`);
            let itemForUpgrade = upgradeTokens[0];
            let typeOfUpgrade = upgradeTokens[1];

            if (inventory.includes(itemForUpgrade)) {
                let index = inventory.indexOf(itemForUpgrade);
                inventory.splice(index + 1, 0, `${itemForUpgrade}:${typeOfUpgrade}`);
            }
        }
    }

    console.log(inventory.join(` `));

}

gladiatorInventory([
'SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])




