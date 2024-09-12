function heartDelivery(arr) {

    let houses = arr.shift().split(`@`).map(Number);
    let command = arr.shift();

    let lastPosition = 0;

    while (command != `Love!`) {

        let tokens = command.split(` `);
        let jumpLength = Number(tokens[1]);

        lastPosition += jumpLength;

        if (lastPosition >= houses.length) {
            lastPosition = 0;

            if (houses[lastPosition] >= 2 && houses[lastPosition] <= 10) {
                houses[lastPosition] -= 2;

                if (houses[lastPosition] <= 0) {
                    console.log(`Place ${lastPosition} has Valentine's day.`);
                    houses[lastPosition ] = `Place ${lastPosition} has Valentine's day.`
                }

            } else {
                console.log(`Place ${lastPosition} already had Valentine's day.`);
            } 

        } else if (lastPosition < houses.length) {

            if (houses[lastPosition] >= 2 && houses[lastPosition] <= 10) {
                houses[lastPosition] -= 2;

                if (houses[lastPosition] <= 0) {
                    console.log(`Place ${lastPosition} has Valentine's day.`);
                    houses[lastPosition ] = `Place ${lastPosition} has Valentine's day.`
                }

            } else {
                console.log(`Place ${lastPosition} already had Valentine's day.`);
            }

        } 

        command = arr.shift();

    }

    let failCounter = 0;

    for (let i = 0; i < houses.length; i++) {

        if (houses[i] >= 2 || houses[i] <= 10) {
            failCounter++;
        }

    }

    console.log(`Cupid's last position was ${lastPosition}.`);

    if (failCounter == 0) {
        console.log(`Mission was successful.`);

    } else {
        console.log(`Cupid has failed ${failCounter} places.`);
    }
    
}

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
