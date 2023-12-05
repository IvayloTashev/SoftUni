function plantDiscovery(arr) {

    let plantsList = {};
    let num = Number(arr.shift());

    for (let i = 1; i <= num; i++) {
        line = arr.shift();
        let [name, rarity] = line.split(`<->`);

        let plant = { name: name, rarity: rarity, rating: [] };

        if (name in plantsList) {
            plantsList[name]["rarity"] = rarity

        } else {
            plantsList[name] = plant;
        }
    }

    let command = arr.shift();

    while (command != `Exhibition`) {

        if (command.includes(`Rate: `)) {
            let tokens = command.split(`Rate: `).join(``).split(` - `);
            let name = tokens[0];
            let ratingScore = Number(tokens[1]);

            if (name in plantsList) {
                plantsList[name]["rating"].push(ratingScore);

            } else {
                console.log("error");
            }

        } else if (command.includes(`Update: `)) {
            let tokens = command.split(`Update: `).join(``).split(` - `);
            let name = tokens[0];
            let rarityScore = Number(tokens[1]);

            if (name in plantsList) {
                plantsList[name]["rarity"] = rarityScore;

            } else {
                console.log("error"); 
            }

        } else if (command.includes(`Reset: `)) {
            let name = command.split(`Reset: `).join(``);

            if (name in plantsList) {
                plantsList[name]["rating"] = [];

            } else {
                console.log("error"); 
            }
        }
        command = arr.shift();
    }

    console.log(`Plants for the exhibition:`);

    for (plant in plantsList) {
        let ratingsArr = plantsList[plant]["rating"];
        let averageRating = 0;

        for (let rating of ratingsArr) {
            averageRating += Number(rating);
        }
    
        if (ratingsArr.length > 0) {
            averageRating /= ratingsArr.length;
        } else {
            averageRating = 0;
        }

        plantsList[plant]["rating"] = averageRating;

        console.log(`- ${plant}; Rarity: ${plantsList[plant]["rarity"]}; Rating: ${plantsList[plant]["rating"].toFixed(2)}`);
    }

}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

