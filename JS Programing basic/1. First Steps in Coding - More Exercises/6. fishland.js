function fishland(input) {

    let mackerelPricePerKg = Number(input[0]);
    let spratPricePerKg = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitoPricePerkg = mackerelPricePerKg * 1.6;
    let safridPricePerKg = spratPricePerKg * 1.8;
    let musselsPricePerKg = 7.50;

    let totalBonitoPrice = bonitoKg * bonitoPricePerkg;
    let totalSafridPrice = safridKg * safridPricePerKg;
    let totalMusselsPrice = musselsKg * musselsPricePerKg;

    let total = totalBonitoPrice + totalSafridPrice + totalMusselsPrice;

    console.log(total.toFixed(2));

}

fishland([6.90, 4.20, 1.5, 2.5, 1])