function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let place = 0;


    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": budget *= 0.30;
                place = "Camp"
                break;
            case "winter": budget *= 0.70;
                place = "Hotel"
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": budget *= 0.40;
                place = "Camp"
                break;
            case "winter": budget *= 0.80;
                place = "Hotel"
                break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel"
        budget *= 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);

}

journey(["312", "summer"])