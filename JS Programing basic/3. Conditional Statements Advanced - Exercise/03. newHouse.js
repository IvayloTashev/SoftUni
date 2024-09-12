function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);



    let totalPrice = 0;

    switch (flowerType) {
        case "Roses": totalPrice = flowerCount * 5;
            if (flowerCount > 80) {
                totalPrice *= 0.90;
            }
            break;
        case "Dahlias": totalPrice = flowerCount * 3.80;
            if (flowerCount > 90) {
                totalPrice *= 0.85;
            }
            break;
        case "Tulips": totalPrice = flowerCount * 2.80;
            if (flowerCount > 80) {
                totalPrice *= 0.85;
            }
            break;
        case "Narcissus": totalPrice = flowerCount * 3;
            if (flowerCount > 120) {
                totalPrice *= 1.15;
            }
            break;
        case "Gladiolus": totalPrice = flowerCount * 2.50;
            if (flowerCount < 80) {
                totalPrice *= 1.20;
            }
            break;
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }

}

newHouse(["Tulips",
    "88",
    "260"])

