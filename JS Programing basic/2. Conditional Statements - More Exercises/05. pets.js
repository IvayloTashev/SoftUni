function pets(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodInKg = Number(input[2]);
    let catFoodInKg = Number(input[3]);
    let turtleFoodInG = Number(input[4]);

    let turtleFoodInKg = turtleFoodInG / 1000;
    let totalFoodForPets = (dogFoodInKg + catFoodInKg + turtleFoodInKg) * days;

    if (food >= totalFoodForPets) {
        console.log(`${Math.floor(food - totalFoodForPets)} kilos of food left.`);

    } else {
        console.log(`${Math.ceil(totalFoodForPets - food)} more kilos of food are needed.`);
    }

}

pets([5, 10, 2.1, 0.8, 321])