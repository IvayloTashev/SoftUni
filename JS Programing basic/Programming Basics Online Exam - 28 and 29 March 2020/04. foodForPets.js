function foodForPets(input) {

    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let index = 2;
    let dayCounter = 0;
    let biscuits = 0;
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;

    for (let i = 0; i < days; i++) {
        dayCounter++;
        let dogFoodForTheDay = Number(input[index]);
        index++;
        foodEatenByDog += dogFoodForTheDay;

        let catFoodForTheDay = Number(input[index]);
        index++;
        foodEatenByCat += catFoodForTheDay;

        if (dayCounter % 3 === 0) {
            biscuits += (dogFoodForTheDay + catFoodForTheDay) * 0.10;
        }

    }

    let totalFoodEaten = foodEatenByDog + foodEatenByCat;

    console.log(`Total eaten biscuits: ${Math.floor(biscuits)}gr.`);
    console.log(`${(totalFoodEaten / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(foodEatenByDog / totalFoodEaten * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(foodEatenByCat / totalFoodEaten * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
