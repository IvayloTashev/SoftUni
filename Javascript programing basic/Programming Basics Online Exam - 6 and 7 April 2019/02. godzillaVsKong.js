function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let costumes = Number(input[2]);

    let decorPrice = budget * 0.10;
    let costumesTotalPrice = extras * costumes;

    if (extras > 150) {
        costumesTotalPrice *= 0.90;
    }

    let totalPriceForMovie = decorPrice + costumesTotalPrice;

    if (budget >= totalPriceForMovie) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalPriceForMovie).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPriceForMovie - budget).toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])