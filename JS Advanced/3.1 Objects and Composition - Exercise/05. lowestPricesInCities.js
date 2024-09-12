function lowestPricesInCities(input) {

    let result = {};

    for (let row of input) {
        let [town, product, price] = row.split(` | `)
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = {town: town, price: price};

        } else {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].town = town;
            }
        }
    }

    let entries = Object.entries(result);

    for (let [productName, townInfo] of entries) {
        console.log(`${productName} -> ${townInfo.price} (${townInfo.town})`);
    }

}

lowestPricesInCities([
    `[Sofia City | Audi | 100000`,
    `Sofia City | BMW | 100000`,
    `Sofia City | Mitsubishi | 10000`,
    `Sofia City | Mercedes | 10000`,
    `Sofia City | NoOffenseToCarLovers | 0`,
    `Mexico City | Audi | 1000`,
    `Mexico City | BMW | 99999`,
    `Mexico City | Mitsubishi | 10000`,
    `New York City | Mitsubishi | 1000`,
    `Washington City | Mercedes | 1000`
])