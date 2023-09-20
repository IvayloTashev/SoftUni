function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let daysCounter = 0;
    let totalSum = 0;


    for (let d = 1; d <= days; d++) {
        daysCounter++;
        let sumForTheDay = 0;

        for (let h = 1; h <= hours; h++) {

            if (d % 2 === 0 && h % 2 !== 0) {
                sumForTheDay += 2.50;
            } else if (d % 2 !== 0 && h % 2 === 0) {
                sumForTheDay += 1.25;
            } else {
                sumForTheDay += 1;
            }
        }

        totalSum += sumForTheDay;

        console.log(`Day: ${daysCounter} - ${sumForTheDay.toFixed(2)} leva`);

    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);

}

vetParking(["5",
    "2"])

