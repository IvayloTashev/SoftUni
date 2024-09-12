function tennisrRanklist(input) {

    let tournamets = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsFromTournaments = 0;
    let games = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {

        let currentStage = input[i];

        switch (currentStage) {
            case "W":
                wins++
                games++
                pointsFromTournaments += 2000;
                break;
            case "F":
                games++
                pointsFromTournaments += 1200;
                break;
            case "SF":
                games++
                pointsFromTournaments += 720;
                break;
        }

    }

    let totalPoints = startingPoints + pointsFromTournaments;
    let averagePoints = pointsFromTournaments / games;

    console.log(`Final points: ${Math.floor(totalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(wins / games * 100).toFixed(2)}%`);

}

tennisrRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
