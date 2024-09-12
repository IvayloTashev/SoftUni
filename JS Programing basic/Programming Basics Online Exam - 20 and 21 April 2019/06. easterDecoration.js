function easterDecoration(input) {

    let NumberOfClients = Number(input[0]);
    let basketPrice = 1.50;
    let wreathPrice = 3.80;
    let chocolateBunnyPrice = 7;
    let index = 1;
    let command = input[index];
    let bill = 0;
    let avgBill = 0;
    let productCounter = 0;
    let currentCliet = 0;


    while (command !== "Finish") {
        currentCliet++;
        bill = 0;
        productCounter = 0;

        while (command !== "Finish") {

            let product = input[index];

            switch (product) {
                case "basket":
                    bill += basketPrice;
                    productCounter++;
                    break;
                case "wreath":
                    bill += wreathPrice;
                    productCounter++;
                    break;
                case "chocolate bunny":
                    bill += chocolateBunnyPrice;
                    productCounter++;
                    break;
            }

            index++;
            command = input[index];

        }

        if (productCounter % 2 === 0) {
            bill *= 0.80;
        }

        avgBill += bill;

        console.log(`You purchased ${productCounter} items for ${bill.toFixed(2)} leva.`);

        if (currentCliet < NumberOfClients) {
            index++;
            command = input[index];
        }

    }

    console.log(`Average bill per client is: ${(avgBill / NumberOfClients).toFixed(2)} leva.`);

}

easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])

