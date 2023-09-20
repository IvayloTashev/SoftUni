function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let route = input[2];

    let totalJuniorsFee = 0;
    let totalSeniorsFee = 0;

    switch (route) {
        case "trail":
            totalJuniorsFee = 5.50 * juniors;
            totalSeniorsFee = 7 * seniors;
            break;
        case "cross-country":
            totalJuniorsFee = 8 * juniors;
            totalSeniorsFee = 9.50 * seniors;
            if ((juniors + seniors) >= 50) {
                totalJuniorsFee *= 0.75;
                totalSeniorsFee *= 0.75;
            }
            break;
        case "downhill":
            totalJuniorsFee = 12.25 * juniors;
            totalSeniorsFee = 13.75 * seniors;
            break;
        case "road":
            totalJuniorsFee = 20 * juniors;
            totalSeniorsFee = 21.50 * seniors;
            break;
    }

    let totalPrice = (totalJuniorsFee + totalSeniorsFee) * 0.95;

    console.log(totalPrice.toFixed(2));

}

bikeRace(["10", "20", "trail"])
