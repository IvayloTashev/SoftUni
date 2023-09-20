function worldSwimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let meters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let IvansTime = meters * timeForMeter;
    let delay = (Math.floor(meters / 15) * 12.5);
    let finalIvansTime = IvansTime + delay;

    if (finalIvansTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalIvansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalIvansTime - worldRecord).toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])

