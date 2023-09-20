function vegetableMarket(input) {

    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let totalVegetables = priceVegetables * kgVegetables;
    let totalFruits = priceFruits * kgFruits;
    let total = (totalVegetables + totalFruits) / 1.94;

    console.log(total.toFixed(2));

}

vegetableMarket(["0.194", "19.4", "10", "10"])