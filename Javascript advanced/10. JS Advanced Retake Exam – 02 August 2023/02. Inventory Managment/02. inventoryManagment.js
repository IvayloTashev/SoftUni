class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length == this.capacity) {
            throw new Error("The inventory is already full.");
        }

        let itemcheck = this.items.find(x => x.itemName == itemName);

        if (!itemcheck) {
            let item = {
                itemName,
                quantity
            }
            this.items.push(item);
            return `Added ${quantity} ${itemName}(s) to the inventory.`

        } else {
            itemcheck.quantity += quantity;
            return `Added ${quantity} ${itemName}(s) to the inventory.`
        }
    }

    sellItem(itemName, quantity) {
        let itemcheck = this.items.find(x => x.itemName == itemName);

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (!itemcheck) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > itemcheck.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        itemcheck.quantity -= quantity;

        if (itemcheck.quantity == 0) {
            this.items = this.items.filter(x => x.itemName != itemName);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let itemcheck = this.items.find(x => x.itemName == itemName);

        if (!itemcheck) {
            let item = {
                itemName,
                quantity
            }

            this.items.push(item);

        } else {
            itemcheck.quantity += quantity;
        }

        if (this.outOfStock.includes(itemName)) {
            this.outOfStock = this.outOfStock.filter(x => x.itemName != itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    
    getInventorySummary() {

        let res = `Current Inventory:\n`;

        for (let item of this.items) {
            res += `${item.itemName}: ${item.quantity}\n`
        }

        if (this.outOfStock.length > 0) {
            res += `Out of Stock: ${this.outOfStock.join(`, `)}`
        }

        return res.trim();
    }
}

const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());

/*
Added 10 Drill(s) to the inventory.
Added 5 Hammer(s) to the inventory.
Added 3 Chisel(s) to the inventory.
Sold 3 Drill(s) from the inventory.
Sold 5 Hammer(s) from the inventory.
Restocked 5 Drill(s) in the inventory.
Restocked 1 Paintbrush(s) in the inventory.
Current Inventory:
Drill: 12
Chisel: 3
Paintbrush: 1
Out of Stock: Hammer
*/