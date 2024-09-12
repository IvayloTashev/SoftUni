function catalogue(input) {

    let catalogueObj = {};

    for (let tokens of input) {
        let [product, price] = tokens.split(` : `);

        catalogueObj[product] = price;
    }

    let entries = Object.entries(catalogueObj).sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = "";

    for (let [product, price] of entries) {

        if (product.charAt(0).toUpperCase() === currentLetter) {
            console.log(`  ${product}: ${price}`);
        } else {
            currentLetter = product.charAt(0).toLocaleUpperCase();
            console.log(currentLetter);
            console.log(`  ${product}: ${price}`);
        }
    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])