function basketballTournament(input) {

    let wins = 0;
    let loses = 0;
    let index = 0;
    let command = input[index];

    while (command !== "End of tournaments") {

        let tournamentName = command;
        index++;
        let NumberOfGames = Number(input[index]);
        let gameCounter = 0;


        for (let i = 1; i <= NumberOfGames; i++) {
            index++
            let ourTeamScore = Number(input[index]);
            index++
            let enemyTeamScore = Number(input[index]);
            gameCounter++;

            if (ourTeamScore > enemyTeamScore) {
                wins++;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: win with ${ourTeamScore - enemyTeamScore} points.`);

            } else if (ourTeamScore < enemyTeamScore) {
                loses++;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: lost with ${enemyTeamScore - ourTeamScore} points.`);

            }

        }

        index++;
        command = input[index];

    }

    let totalGamesPlayed = wins + loses;

    console.log(`${(wins / totalGamesPlayed * 100).toFixed(2)}% matches win`);
    console.log(`${(loses / totalGamesPlayed * 100).toFixed(2)}% matches lost`);

}

basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])
