function furniture(input) {

    let totalSpend = 0;
    let furnitureNames = [];
    let pattern = />>(?<item>[A-Z][A-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    let command = input.shift();

    while (command != `Purchase`) {
        let match = pattern.exec(command);

        if (match != null) {
            let { item, price, qty } = match.groups;
            furnitureNames.push(item);
            let furniturePrice = Number(price) * Number(qty);
            totalSpend += furniturePrice;
        }
        command = input.shift();
    }

    console.log(`Bought furniture:`);

    if (furnitureNames.length > 0) {
        console.log(furnitureNames.join(`\n`));
    }

    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);

}

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])