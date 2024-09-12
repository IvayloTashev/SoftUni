function fruitMarket(a, b, c, d, e) {

    let strawberryPriceInLv = Number(a);
    let bananaInKg = Number(b);
    let orangesInKg = Number(c);
    let raspberryInKg = Number(d);
    let strawberryInKg = Number(e);

    let raspberryPriceInLv = strawberryPriceInLv / 2;
    let orangesPriceInLv = raspberryPriceInLv * 0.60;
    let bananasPriceInLv = raspberryPriceInLv * 0.20;

    let strawberryTotalPrice = strawberryPriceInLv * strawberryInKg;
    let raspberryTotalPrice = raspberryPriceInLv * raspberryInKg;
    let bananaTotalPrice = bananasPriceInLv * bananaInKg;
    let orangesTotalPrice = orangesPriceInLv * orangesInKg;

    let totalPrice = strawberryTotalPrice + raspberryTotalPrice + bananaTotalPrice + orangesTotalPrice;

    console.log(totalPrice)

}

fruitMarket(48, 10, 3.3, 6.5, 1.7)