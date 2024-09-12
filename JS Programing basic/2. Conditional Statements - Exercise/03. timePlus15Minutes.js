function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeAfter15Minutes = minutes + 15;

    if (timeAfter15Minutes >= 60) {
        hours += 1;
        minutes = timeAfter15Minutes - 60;
    }

    if (timeAfter15Minutes < 60) {
        minutes += 15;
    }

    if (hours === 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }

}

timePlus15Minutes(["0", "45"])