function blackFlag(arr) {

    let days = Number(arr.shift());
    let dailyPluder = Number(arr.shift());
    let target = Number(arr.shift());
    let collectedPluder = 0;


    for (let i = 1; i <= days; i++) {

        collectedPluder += dailyPluder;

        if (i % 3 == 0) {
            collectedPluder += dailyPluder / 2;
        }

        if (i % 5 == 0) {
            collectedPluder *= 0.70;
        }
    }

    if (collectedPluder >= target) {
        console.log(`Ahoy! ${collectedPluder.toFixed(2)} plunder gained.`);

    } else {
        console.log(`Collected only ${(collectedPluder / target * 100).toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["10",
    "20",
    "380"])
