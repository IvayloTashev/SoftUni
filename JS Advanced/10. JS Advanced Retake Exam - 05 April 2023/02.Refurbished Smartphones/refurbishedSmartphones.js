class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model || storage < 0 || price < 0 || !condition) {
            //try with <= 0 if there is any problems
            throw new Error("Invalid smartphone!");
        }

        let obj = {
            model,
            storage,
            price,
            condition
        }

        this.availableSmartphones.push(obj);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {
        let data = this.availableSmartphones.find(x => x.model == model);
        let discount = 1;

        if (!data) {
            throw new Error(`${model} was not found!`);
        }

        if (data.storage < desiredStorage) {
            if (desiredStorage - data.storage <= 128) {
                discount = 0.9;
            } else if (desiredStorage - data.storage > 128) {
                discount = 0.8;
            }
        }

        this.availableSmartphones = this.availableSmartphones.filter(x => x.model != model);

        let soldPhone = {
            model: data.model,
            storage: data.storage,
            price: data.price * discount
        }

        this.soldSmartphones.push(soldPhone);
        this.revenue += data.price * discount;
        return `${model} was sold for ${(data.price * discount).toFixed(2)}$`
    }

    upgradePhones() {
        if (this.availableSmartphones.length == 0) {
            throw new Error(`There are no available smartphones!`);
        }

        let result = [];
        result.push(`Upgraded Smartphones:`);

        for (let phone of this.availableSmartphones) {
            phone.storage *= 2;
            result.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }

        return result.join(`\n`);
    }

    salesJournal(criteria) {
        if (criteria == "storage") {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);

        } else if (criteria == "model") {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));

        } else {
            throw new Error("Invalid criteria!");
        }

        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        for (let phone of this.soldSmartphones) {
            result.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`);
        }

        return result.join(`\n`);
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));



/*
SecondLife Devices has a total income of 1297.00$
2 smartphones sold:
Samsung S20 Ultra / 256 GB / 1000.00$
Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$
*/