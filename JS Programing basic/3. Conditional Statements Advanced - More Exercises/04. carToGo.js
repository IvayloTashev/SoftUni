function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let carType = 0;

    if (budget <= 100) {
        console.log(`Economy class`);
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                budget *= 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                budget *= 0.65;
                break;
        }
    } else if (budget <= 500) {
        console.log(`Compact class`);
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                budget *= 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                budget *= 0.80;
                break;
        }
    } else {
        console.log(`Luxury class`);
        carType = "Jeep";
        budget *= 0.90;
    }

    console.log(`${carType} - ${budget.toFixed(2)}`);

}

carToGo(["450", "Winter"])