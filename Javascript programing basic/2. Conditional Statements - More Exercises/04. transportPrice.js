function transportPrice(input) {

    let kilometers = Number(input[0]);
    let dayOrNight = input[1];
    let cheapestTransport = 0;

    if (kilometers < 20 && dayOrNight === "day") {
        cheapestTransport = 0.70 + (kilometers * 0.79);
    } else {
        cheapestTransport = 0.70 + (kilometers * 0.90);
    }

    if (kilometers >= 100) {
        cheapestTransport = kilometers * 0.06;
    }

    if (kilometers >= 20 && kilometers < 100) {
        cheapestTransport = kilometers * 0.09;
    }

    console.log(cheapestTransport.toFixed(2));

}

transportPrice(["180", "night"])