function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location = 0;
    let place = 0;

    if (budget <= 1000) {
        place = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                budget *= 0.65;
                break;
            case "Winter":
                location = "Morocco";
                budget *= 0.45;
                break;
        }
    } else if (budget <= 3000) {
        place = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                budget *= 0.80;
                break;
            case "Winter":
                location = "Morocco";
                budget *= 0.60;
                break;
        }
    } else {
        place = "Hotel";
        switch (season) {
            case "Summer":
                location = "Alaska";
                budget *= 0.90;
                break;
            case "Winter":
                location = "Morocco";
                budget *= 0.90;
                break;
        }
    }

    console.log(`${location} - ${place} - ${budget.toFixed(2)}`);

}

vacation(["800", "Summer"])