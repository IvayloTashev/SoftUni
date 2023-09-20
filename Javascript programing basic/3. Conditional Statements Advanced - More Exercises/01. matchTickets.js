function matchTickets(input) {

    let budget = Number(input[0]);
    let ticketType = input[1];
    let peopleCount = Number(input[2]);

    let ticketPrice = 0;
    let transportPrice = 0;

    switch (ticketType) {
        case "Normal": ticketPrice = 249.99; break;
        case "VIP": ticketPrice = 499.99; break;
    }

    if (peopleCount >= 1 && peopleCount <= 4) {
        transportPrice = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportPrice = budget * 0.60;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportPrice = budget * 0.50;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    let totalPrice = (ticketPrice * peopleCount) + transportPrice;

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }

}

matchTickets(["30000", "VIP", "49"])