function flowers(input) {

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holyday = input[4];

    let chrysanthemumsTotalPrice = 0;
    let rosesTotalPrice = 0;
    let tulipsTotalPrice = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsTotalPrice = chrysanthemums * 2;
            rosesTotalPrice = roses * 4.10;
            tulipsTotalPrice = tulips * 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsTotalPrice = chrysanthemums * 3.75;
            rosesTotalPrice = roses * 4.50;
            tulipsTotalPrice = tulips * 4.15;
            break;
    }

    let totalFlowersPrice = chrysanthemumsTotalPrice + rosesTotalPrice + tulipsTotalPrice;

    if (holyday === "Y") {
        totalFlowersPrice *= 1.15;
    }
    if (tulips > 7 && season === "Spring") {
        totalFlowersPrice *= 0.95;
    }
    if (roses >= 10 && season === "Winter") {
        totalFlowersPrice *= 0.90;
    }
    if ((chrysanthemums + roses + tulips) > 20) {
        totalFlowersPrice *= 0.80;
    }


    let total = totalFlowersPrice + 2;

    console.log(total.toFixed(2));

}

flowers(["2", "4", "8", "Spring", "Y"])
