function easterLunch(input) {

    let easterBread = Number(input[0]);
    let eggs = Number(input[1]);
    let biscuits = Number(input[2]);

    let easterBreadTotalPrice = easterBread * 3.20;
    let biscuitsTotalPrice = biscuits * 5.40;
    let PriceForOneEgg = 4.35 / 12;
    let eggsTotalPrice = eggs * 12 * (PriceForOneEgg + 0.15);

    let total = easterBreadTotalPrice + biscuitsTotalPrice + eggsTotalPrice;

    console.log(total.toFixed(2));

}

easterLunch([3, 2, 3])