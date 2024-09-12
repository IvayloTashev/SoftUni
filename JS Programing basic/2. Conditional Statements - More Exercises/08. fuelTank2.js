function fuelTank2(input) {

    let fuelType = input[0];
    let fuel = Number(input[1]);
    let card = input[2];

    let gasolinePricePerLiter = 2.22;
    let dieselPricePerLiter = 2.33;
    let gasPricePerLiter = 0.93;

    let totalPriceForFuel = 0;

    if (card === "Yes") {
        gasolinePricePerLiter -= 0.18;
        dieselPricePerLiter -= 0.12;
        gasPricePerLiter -= 0.08;
    }

    if (fuelType === "Gas") {
        totalPriceForFuel = fuel * gasPricePerLiter;
    } else if (fuelType === "Gasoline") {
        totalPriceForFuel = fuel * gasolinePricePerLiter;
    } else {
        totalPriceForFuel = fuel * dieselPricePerLiter;
    }

    if (fuel >= 20 && fuel <= 25) {
        totalPriceForFuel *= 0.92;
    } else if (fuel > 25) {
        totalPriceForFuel *= 0.90;
    }

    console.log(`${totalPriceForFuel.toFixed(2)} lv.`);
}

fuelTank2(["Gasoline", 25, "No"])