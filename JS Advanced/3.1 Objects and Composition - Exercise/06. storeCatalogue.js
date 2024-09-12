function storeCatalogue(input) {

    let result = {};

    for (let row of input) {
        let [product, price] = row.split(` : `);
        price = Number(price);
        result[product] = price;
    }

    let entries = Object.entries(result);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    let separator = "";

    for (let [productName, price] of entries) {

        if (productName.charAt(0).toUpperCase() == separator) {
            console.log(`  ${productName}: ${price}`);
        } else {
            separator = productName.charAt(0).toUpperCase();
            console.log(separator);
            console.log(`  ${productName}: ${price}`);
        }
    }
}

storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])