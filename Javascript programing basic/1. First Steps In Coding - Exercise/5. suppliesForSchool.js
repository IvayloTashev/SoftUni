function suppliesForSchool(input) {

    let PackOfpens = Number(input[0]);
    let PackOfmarkers = Number(input[1]);
    let litersDeterget = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let priceForPens = PackOfpens * 5.80;
    let priceForMarkers = PackOfmarkers * 7.20;
    let PriceForDeterget = litersDeterget * 1.20;
    let totalPriceForMaterial = priceForPens + priceForMarkers + PriceForDeterget;
    let totalPriceWithDiscount = totalPriceForMaterial - (totalPriceForMaterial * percentDiscount / 100);

    console.log(totalPriceWithDiscount);

}

suppliesForSchool(["2", "3", "4", "25"])