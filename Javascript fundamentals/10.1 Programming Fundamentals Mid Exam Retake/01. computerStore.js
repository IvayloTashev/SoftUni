function computerStore(input) {

    let index = 0;
    let command = input[index];
    let TotalPriceWithoutTaxes = 0;

    while (command != "special") {

        if (command == "regular") {
            break;
        }

        let currentPrice = Number(input[index]);

        if (currentPrice < 0) {
            console.log("Invalid price!");
            index++;
            command = input[index];
            continue;
        }

        TotalPriceWithoutTaxes += currentPrice;
        index++;
        command = input[index];
    }

    if (TotalPriceWithoutTaxes == 0) {
        console.log(`Invalid order!`);
    } else {

        let taxes = TotalPriceWithoutTaxes * 0.20;
        let totalPrice = TotalPriceWithoutTaxes + taxes;

        if (command == "special") {
            totalPrice *= 0.90;
        }

console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${TotalPriceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
}

}

computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])
    


