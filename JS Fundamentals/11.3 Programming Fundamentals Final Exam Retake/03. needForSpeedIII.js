function needForSpeedIII(arr) {

    let num = arr.shift();
    let carsList = {};

    for (let i = 1; i <= num; i++) {
        let line = arr.shift();
        let [model, mileage, fuel] = line.split(`|`);
        mileage = Number(mileage);
        fuel = Number(fuel);

        let car = { mileage: mileage, fuel: fuel };
        carsList[model] = car
    }

    let command = arr.shift();

    while (command != `Stop`) {

        let tokens = command.split(` : `);
        let operation = tokens.shift();
        let model = tokens.shift();

        if (operation == `Drive`) {
            let distance = Number(tokens[0]);
            let fuel = Number(tokens[1]);

            if (carsList[model]["fuel"] > fuel) {
                carsList[model]["mileage"] += distance;
                carsList[model]["fuel"] -= fuel;
                console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (carsList[model]["mileage"] >= 100000) {
                console.log(`Time to sell the ${model}!`);
                delete carsList[model];
            }

        } else if (operation == `Refuel`) {
            let refill = Number(tokens[0]);

            if (!(carsList[model]["fuel"] + refill < 75)) {
                refill = 75 - carsList[model]["fuel"];
            }

            carsList[model]["fuel"] += refill

            console.log(`${model} refueled with ${refill} liters`);

        } else if (operation == `Revert`) {
            let kilometers = Number(tokens[0]);

            if (carsList[model]["mileage"] - kilometers < 10000) {
                carsList[model]["mileage"] = 10000;

            } else {
                carsList[model]["mileage"] -= kilometers;
                console.log(`${model} mileage decreased by ${kilometers} kilometers`);
            }

        }

        command = arr.shift();
    }

    for (model in carsList) {
        console.log(`${model} -> Mileage: ${carsList[model]["mileage"]} kms, Fuel in the tank: ${carsList[model]["fuel"]} lt.`);

    }

}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])

// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ]
//   )


