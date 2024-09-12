function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let boatRent = 0;

    switch (season) {
        case "Spring": boatRent = 3000; break;
        case "Summer":
        case "Autumn": boatRent = 4200; break;
        case "Winter": boatRent = 2600; break;
    }

    if (fishermen <= 6) {
        boatRent *= 0.90;
    } else if (fishermen <= 11) {
        boatRent *= 0.85;
    } else {
        boatRent *= 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        boatRent *= 0.95
    }

    if (budget >= boatRent) {
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["2000",
    "Winter",
    "13"])



