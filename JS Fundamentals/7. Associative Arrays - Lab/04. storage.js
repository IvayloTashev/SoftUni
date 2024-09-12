function storage(input) {

    let storageArr = {};

    for (let products of input) {

        let tokens = products.split(` `);
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (product in storageArr) {
            storageArr[product] += quantity;

        } else {
            storageArr[product] = quantity;
        }
    }

    for (let [product, quantity] of Object.entries(storageArr)) {
        console.log(product, `->`, quantity);
    }
    
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])