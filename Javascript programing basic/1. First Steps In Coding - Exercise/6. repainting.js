function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);
    let bag = 0.40;

    let priceForNylon = (nylon + 2) * 1.50;
    let priceForPaint = (paint * 1.1) * 14.50;
    let priceForThinner = thinner * 5.00;

    let totalPriceForMaterials = priceForNylon + priceForPaint + priceForThinner + bag;
    let priceForOneHourWork = totalPriceForMaterials * 0.30;
    let total = totalPriceForMaterials + (priceForOneHourWork * workingHours);

    console.log(total);


}

repainting(["10", "11", "4", "8"])