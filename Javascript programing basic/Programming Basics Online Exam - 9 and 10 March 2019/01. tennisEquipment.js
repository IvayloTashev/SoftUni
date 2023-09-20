function tennisEquipment(input) {

    let singlePriceFortennisRacket = Number(input[0]);
    let numberOfTennisRackets = Number(input[1]);
    let numberOfSneakers = Number(input[2]);

    let singlePriceForSneakers = singlePriceFortennisRacket / 6;
    let totalForSneakers = numberOfSneakers * singlePriceForSneakers;
    let totalForTennisRackets = numberOfTennisRackets * singlePriceFortennisRacket;
    let totalForOthers = (totalForTennisRackets + totalForSneakers) * 0.20;

    let total = totalForTennisRackets + totalForSneakers + totalForOthers;
    let djokovicInvoice = total * 0.125;
    let sponsorsInvoice = total * 0.875;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicInvoice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsInvoice)}`);

}

tennisEquipment([850, 4, 2])