function sleepyTomCat(input) {

    let daysOff = Number(input[0]);

    let playTimeInDaysOff = daysOff * 127;
    let playTimeInWorkDays = (365 - daysOff) * 63;
    let totalPlayTime = playTimeInDaysOff + playTimeInWorkDays;
    let normDifference = 30000 - totalPlayTime
    let normDifferenceHours = Math.trunc(normDifference / 60);
    let normDifferenceMinutes = normDifference % 60;

    if (30000 > totalPlayTime) {
        console.log("Tom sleeps well");
        console.log(`${normDifferenceHours} hours and ${normDifferenceMinutes} minutes less for play`)
    } else {
        console.log("Tom will run away");
        console.log(`${Math.abs(normDifferenceHours)} hours and ${Math.abs(normDifferenceMinutes)} minutes more for play`)
    }

}

sleepyTomCat(["20"])