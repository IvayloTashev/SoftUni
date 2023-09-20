function oscars(input) {

    let name = input[0];
    let startingPoints = Number(input[1]);
    let judges = Number(input[2]);


    for (let i = 3; i < input.length; i++) {
        if (i % 2 !== 0) {
            let points = i + 1;
            let totalPoints = input[i].length * input[points] / 2;
            startingPoints += totalPoints;
        }

        if (startingPoints > 1250.5) {
            break;
        }
    }
    if (startingPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
