function careOfPuppy(input) {

    let foodInKg = Number(input[0]);
    let foodInG = foodInKg * 1000;
    let index = 1;
    let command = input[index];

    while (command !== "Adopted") {

        let dailyPortion = Number(command);
        foodInG -= dailyPortion;
        index++;
        command = input[index];
    }

    if (foodInG >= 0){
        console.log(`Food is enough! Leftovers: ${foodInG} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodInG)} grams more.`);
    }

}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
