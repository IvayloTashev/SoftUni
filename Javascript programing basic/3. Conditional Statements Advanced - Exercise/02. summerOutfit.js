function summerOutfit(input) {

    let temperature = Number(input[0]);
    let timeOfTheDay = input[1];

    switch (timeOfTheDay) {
        case "Morning":
            if (temperature >= 25) {
                console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
            } else if (temperature > 18 && temperature <= 24) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
            } else if (temperature >= 10 && temperature <= 18) {
                console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`);
            }
            break;
        case "Afternoon":
            if (temperature >= 25) {
                console.log(`It's ${temperature} degrees, get your Swim Suit and Barefoot.`);
            } else if (temperature > 18 && temperature <= 24) {
                console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
            } else if (temperature >= 10 && temperature <= 18) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
            }
            break;
        case "Evening":
            if (temperature >= 10) {
                console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
            }
            break;
    }

}

summerOutfit(["28", "Evening"])


