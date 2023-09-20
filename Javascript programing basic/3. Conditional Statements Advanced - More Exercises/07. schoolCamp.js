function schoolCamp(input) {

    let season = input[0];
    let group = input[1];
    let studentsCount = Number(input[2]);
    let nights = Number(input[3]);

    let sport = 0;
    let priceForRoom = 0;

    switch (season) {
        case "Winter":
            if (group === "girls") {
                sport = "Gymnastics";
                priceForRoom = nights * 9.60;
            } else if (group === "boys") {
                sport = "Judo";
                priceForRoom = nights * 9.60;
            } else {
                sport = "Ski";
                priceForRoom = nights * 10;
            }
            break;
        case "Spring":
            if (group === "girls") {
                sport = "Athletics";
                priceForRoom = nights * 7.20;
            } else if (group === "boys") {
                sport = "Tennis";
                priceForRoom = nights * 7.20;
            } else {
                sport = "Cycling";
                priceForRoom = nights * 9.50;
            }
            break;
        case "Summer":
            if (group === "girls") {
                sport = "Volleyball";
                priceForRoom = nights * 15;
            } else if (group === "boys") {
                sport = "Football";
                priceForRoom = nights * 15;
            } else {
                sport = "Swimming";
                priceForRoom = nights * 20;
            }
            break;
    }

    if (studentsCount >= 50) {
        priceForRoom *= 0.50;
    } else if (studentsCount >= 20) {
        priceForRoom *= 0.85;
    } else if (studentsCount >= 10) {
        priceForRoom *= 0.95;
    }

    console.log(`${sport} ${(priceForRoom * studentsCount).toFixed(2)} lv.`);

}

schoolCamp(["Spring", "girls", "20", "7"])