function poolDay(input) {

    let people = Number(input[0]);
    let fee = Number(input[1]);
    let priceSunLounger = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let totalFee = people * fee;

    let UmbrellaPeople = Math.ceil(people / 2);
    let totalUmbrella = UmbrellaPeople * priceUmbrella;

    let SunLoungerPeople = Math.ceil(people * 0.75);
    let totalSunLounger = SunLoungerPeople * priceSunLounger;

    let total = totalFee + totalUmbrella + totalSunLounger;

    console.log(`${total.toFixed(2)} lv.`);

}

poolDay(["50", "6", "8", "4"])