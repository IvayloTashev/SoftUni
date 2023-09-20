function workout(input) {

    let trainingDays = Number(input[0]);
    let fistDay = Number(input[1]);
    let previousDay = 0;
    let dailyrate = 0;
    let totalDistance = 0;
    let day = 1;

    for (let i = 2; i < input.length; i++ ){

        day++;
        let increaseInPercent = Number(input[i]);

        if (day === 2){
            dailyrate += ((increaseInPercent / 100) * fistDay) + fistDay;
            totalDistance += dailyrate;

        } else {
            dailyrate = ((increaseInPercent / 100) * previousDay) + previousDay;
            totalDistance += dailyrate;
        }

        previousDay = dailyrate;

    }

    if (totalDistance >= 1000){
        console.log(`You've done a great job running ${Math.ceil((totalDistance + fistDay) - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - (totalDistance + fistDay))} more kilometers`);
    }

}

workout(["4",
"100",
"30",
"50",
"60",
"80"])

