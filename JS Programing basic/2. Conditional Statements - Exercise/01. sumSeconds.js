function sumSeconds(input) {

    let timeOne = Number(input[0]);
    let timeTwo = Number(input[1]);
    let timeThree = Number(input[2]);

    let totalTimeInSecs = timeOne + timeTwo + timeThree;
    let totalTimeInMinutes = Math.floor(totalTimeInSecs / 60);
    let secsRemains = totalTimeInSecs % 60;

    if (secsRemains < 10) {
        console.log(`${totalTimeInMinutes}:0${secsRemains}`)
    } else {
        console.log(`${totalTimeInMinutes}:${secsRemains}`)
    }

}

sumSeconds(["14", "12",
"10"])

