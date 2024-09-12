function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceForStudio = 0;
    let priceForApartment = 0;

    if (month === "May" || month === "October") {
        priceForStudio = nights * 50;
        priceForApartment = nights * 65;
    } else if (month === "June" || month === "September") {
        priceForStudio = nights * 75.20;
        priceForApartment = nights * 68.70;
    } else if (month === "July" || month === "August") {
        priceForStudio = nights * 76;
        priceForApartment = nights * 77;
    }

    switch (month) {
        case "May":
        case "October":
            if (nights > 14) {
                priceForStudio *= 0.70;
                priceForApartment *= 0.90
            } else if (nights > 7) {
                priceForStudio *= 0.95;
            }
            break;
        case "June":
        case "September":
            if (nights > 14) {
                priceForStudio *= 0.80;
                priceForApartment *= 0.90
            }
            break;
        case "July":
        case "August":
            if (nights > 14) {
                priceForApartment *= 0.90
            }
            break;
    }

    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`);
}

hotelRoom(["August",
    "20"])

