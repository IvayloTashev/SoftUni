function fuelTank(input) {

    let fuel = input[0];
    let liters = Number(input[1]);

    if (fuel !== "Diesel" && fuel !== "Gas" && fuel !== "Gasoline") {
        console.log("Invalid fuel!");
    } else if (liters >= 25) {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else {
        console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }

}

fuelTank(["Diesel", 10])