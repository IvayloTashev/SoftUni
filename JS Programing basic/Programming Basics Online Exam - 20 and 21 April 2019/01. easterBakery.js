function easterBakery (input){

    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggs = Number(input[3]);
    let yeast = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggsPrice = flourPrice * 1.10;
    let yeastPrice = sugarPrice * 0.20;

    let flourTotalPrice = flourPrice * flourKg;
    let sugarTotalPrice = sugarPrice * sugarKg;
    let eggsTotalPrice = eggsPrice * eggs;
    let yeastTotalPrice = yeastPrice * yeast;

    let total = flourTotalPrice + sugarTotalPrice + eggsTotalPrice + yeastTotalPrice;

    console.log(total.toFixed(2));

}

easterBakery([50, 10, 3.5, 6, 1])