function santasHoliday(input) {

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let totalPrice = 0;

    switch (typeOfRoom) {

        case "room for one person":
            totalPrice += 18;
            break;
        case "apartment":
            if (nights < 10) {
                totalPrice += 25 * 0.7;

            } else if (nights <= 15) {
                totalPrice += 25 * 0.65;

            } else {
                totalPrice += 25 * 0.5;
            }
            break;
        case "president apartment":
            if (nights < 10) {
                totalPrice += 35 * 0.90;

            } else if (nights <= 15) {
                totalPrice += 35 * 0.85;

            } else {
                totalPrice += 35 * 0.80;
            }
            break;
    }

    totalPrice *= nights;

    if (feedback === "positive") {
        totalPrice *= 1.25;
    } else if (feedback === "negative") {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));

}

santasHoliday(["30",
    "president apartment",
    "negative"])
