class FashionRetailInventory {
    storehouse;
    location;
    productStock;

    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let data = this.productStock.find(p => p.productName == productName);

        if (data) {
            if (data.size == size) {
                data.quantity += quantity;
                return `You added ${quantity} more pieces of product ${productName} size ${size}`;
            }
        }
        
        this.productStock.push({
            productName,
            size,
            quantity,
            price
        });

        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

    sendProduct (productName, size) {
        let data = this.productStock.find(p => p.productName == productName)

        if (!data) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        } else {

            if (data.size != size) {
                throw new Error(`The product ${productName}, size ${size} is not in the inventory`)

            } else {
                let index = this.productStock.indexOf(data);
                this.productStock.splice(index, 1);
                return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            };
        }
    }

    findProductsBySize (size) {
        let buffer = [];
        let result = [];

        for (let product of this.productStock) {
            if (product.size == size) {
                buffer.push(product);
            }
        }

        if (buffer.length > 0) {
            for (let product of buffer) {
                result.push(`${product.productName}-${product.quantity} pieces`)
            }
            return result.join(`, `);

        } else {
            return `There are no products available in that size`;
        }
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`

        } else {
            let result = `${this.storehouse} storehouse in ${this.location} available products:`;
            result += "\n"
            let sortedList = Object.entries(this.productStock).sort((a, b) => a[1].productName.localeCompare(b[1].productName));

            for (let product of sortedList) {
                result += `${product[1].productName}/Size:${product[1].size}/Quantity:${product[1].quantity}/Price:${product[1].price}$`
                result += "\n"
            }

            return result.trim();
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

/*
The product Shirt, size M was successfully added to the inventory
  The product T-Shirt, size M was successfully added to the inventory
  The product Shirt, size L was successfully added to the inventory
  The product Shoes, size 9 was successfully added to the inventory
  The product Shoes, size 9 was successfully removed from the inventory
  East storehouse in Milano available products:
  Shirt/Size:M/Quantity:10/Price:25$
  Shirt/Size:L/Quantity:5/Price:30$
  T-Shirt/Size:M/Quantity:10/Price:25$
*/