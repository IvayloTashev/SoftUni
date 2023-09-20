function OnTimeForTheExam(input) {

    let hourOfTheExam = Number(input[0]);
    let minuteOfTheExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let examTimeInMinutes = (hourOfTheExam * 60) + minuteOfTheExam;
    let arrivalTimeInMinutes = (hourOfArrival * 60) + minuteOfArrival;


    if (examTimeInMinutes >= arrivalTimeInMinutes) {
        if ((examTimeInMinutes - arrivalTimeInMinutes) === 0) {
            console.log("On time");
        } else if ((examTimeInMinutes - arrivalTimeInMinutes) <= 30) {
            console.log("On time");
            console.log(`${examTimeInMinutes - arrivalTimeInMinutes} minutes before the start`);
        } else if ((examTimeInMinutes - arrivalTimeInMinutes) < 60) {
            console.log("Early");
            console.log(`${examTimeInMinutes - arrivalTimeInMinutes} minutes before the start`);
        } else if ((examTimeInMinutes - arrivalTimeInMinutes) >= 60) {
            if ((examTimeInMinutes - arrivalTimeInMinutes) % 60 < 10) {
                console.log("Early");
                console.log(`${hourOfTheExam - hourOfArrival}:0${(examTimeInMinutes - arrivalTimeInMinutes) % 60} hours before the start`);
            } else {
                console.log("Early");
                console.log(`${hourOfTheExam - hourOfArrival}:${(examTimeInMinutes - arrivalTimeInMinutes) % 60} hours before the start`);
            }
        }

    } else if (examTimeInMinutes < arrivalTimeInMinutes) {
        if ((arrivalTimeInMinutes - examTimeInMinutes) < 60) {
            console.log("Late");
            console.log(`${arrivalTimeInMinutes - examTimeInMinutes} minutes after the start`);
        } else if ((arrivalTimeInMinutes - examTimeInMinutes) >= 60) {
            if ((arrivalTimeInMinutes - examTimeInMinutes) % 60 < 10) {
                console.log("Late");
                console.log(`${hourOfArrival - hourOfTheExam}:0${(arrivalTimeInMinutes - examTimeInMinutes) % 60} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${hourOfArrival - hourOfTheExam}:${(arrivalTimeInMinutes - examTimeInMinutes) % 60} hours after the start`);
            }
        }
    }

}

OnTimeForTheExam(["10",
    "00",
    "10",
    "10"])






