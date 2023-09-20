function harvest(input) {

    let vineyardInSquareMeters = Number(input[0]);
    let cropPerSquareMeter = Number(input[1]);
    let wineForSellInLiters = Number(input[2]);
    let workers = Number(input[3]);

    let totalCrop = vineyardInSquareMeters * cropPerSquareMeter;
    let cropForWine = totalCrop * 0.40;
    let wineProducedInLiters = cropForWine / 2.5;

    if (wineProducedInLiters >= wineForSellInLiters) {

        let wineForWorkers = (wineProducedInLiters - wineForSellInLiters) / workers;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProducedInLiters)} liters.`);
        console.log(`${Math.ceil(wineProducedInLiters - wineForSellInLiters)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(wineForSellInLiters - wineProducedInLiters)} liters wine needed.`);
    }

}

harvest([650, 2, 175, 3])
