function timeToWalk(steps, footprint, speed) {

    let distance = steps * footprint;
    let speedMeterPerSec = speed / 3.6;
    let delay = Math.floor(distance / 500);
    let timeInMin = distance / speedMeterPerSec / 60 + delay;

    let minutes = Math.floor(timeInMin);
    let seconds = Math.round(timeInMin % minutes * 60);
    let hours = 0;

    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
    }

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;


    console.log(`${hours}:${minutes}:${seconds}`);

}

timeToWalk(2564, 0.70, 5.5)