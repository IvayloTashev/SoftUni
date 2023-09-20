function cinemaTickets(input) {

    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let kidTicketCounter = 0;
    let allTicketCounter = 0;
    let currentTicketCounter = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Finish") {

        let movie = command;
        index++;
        command = input[index];
        let freeSeats = Number(command);
        index++;
        command = input[index];


        while (command !== "End") {
            allTicketCounter++
            currentTicketCounter++;

            switch (command) {
                case "standard": standardTicketCounter++; break;
                case "student": studentTicketCounter++; break;
                case "kid": kidTicketCounter++; break;
            }

            if (currentTicketCounter === freeSeats) {
                break;
            }

            index++;
            command = input[index];

        }

        console.log(`${movie} - ${(currentTicketCounter / freeSeats * 100).toFixed(2)}% full.`);

        currentTicketCounter = 0;
        index++;
        command = input[index];

    }

    console.log(`Total tickets: ${allTicketCounter}`);
    console.log(`${(studentTicketCounter / allTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCounter / allTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketCounter / allTicketCounter * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
