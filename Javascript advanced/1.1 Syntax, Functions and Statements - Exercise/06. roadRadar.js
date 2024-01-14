function roadRadar(speed, area) {

    let limit = 0;
    let DrivingStatus = ``;

    switch (area) {
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break;
        case "residential": limit = 20; break;
    }

    if (speed > limit) {

        if (speed - limit <= 20) {
            DrivingStatus = "speeding"

        } else if (speed - limit <= 40) {
            DrivingStatus = "excessive speeding"

        } else {
            DrivingStatus = "reckless driving"
        }

        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${DrivingStatus}`);

    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);

    }

}

roadRadar(40, 'city')
console.log("----------");
roadRadar(21, 'residential')
console.log("----------");
roadRadar(120, 'interstate')
console.log("----------");
roadRadar(200, 'motorway')
