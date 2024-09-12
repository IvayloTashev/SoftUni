function gameOfIntervals(input) {

    let tunrs = Number(input[0]);

    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let fails = 0;
    let points = 0;

    for (let i = 1; i <= tunrs; i++) {
        if (Number(input[i]) >= 0 && Number(input[i]) <= 9) {
            points += (Number(input[i]) * 0.20)
            from0To9++
        } else if (Number(input[i]) >= 10 && Number(input[i]) <= 19) {
            points += (Number(input[i]) * 0.30)
            from10To19++
        } else if (Number(input[i]) >= 20 && Number(input[i]) <= 29) {
            points += (Number(input[i]) * 0.40)
            from20To29++
        } else if (Number(input[i]) >= 30 && Number(input[i]) <= 39) {
            points += 50;
            from30To39++
        } else if (Number(input[i]) >= 40 && Number(input[i]) <= 50) {
            points += 100;
            from40To50++
        } else {
            points = points / 2;
            fails++
        }

    }

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(from0To9 / tunrs * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(from10To19 / tunrs * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(from20To29 / tunrs * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(from30To39 / tunrs * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(from40To50 / tunrs * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(fails / tunrs * 100).toFixed(2)}%`);

}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])