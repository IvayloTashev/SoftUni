function logistics(input) {

    let loads = Number(input[0]);

    let buss = 0;
    let truck = 0;
    let train = 0;
    let bussPrice = 200;
    let truckPrice = 175;
    let trainPrice = 120;

    for (let i = 1; i <= loads; i++) {

        if (Number(input[i] <= 3)) {
            buss += Number(input[i]);

        } else if (Number(input[i] <= 11)) {
            truck += Number(input[i]);
        } else {
            train += Number(input[i]);
        }

    }

    let totalWeight = buss + truck + train;
    let averagePrice = (buss * bussPrice + truck * truckPrice + train * trainPrice) / totalWeight;

    console.log(averagePrice.toFixed(2));
    console.log(`${(buss / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(truck / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(train / totalWeight * 100).toFixed(2)}%`);

}

logistics([5, 2, 10, 20, 1, 7])