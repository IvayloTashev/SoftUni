function pirates(input) {

    let command = input.shift();
    let towns = {};

    while (command != "Sail") {
        let tokens = command.split(`||`);
        let townName = tokens.shift();
        let population = Number(tokens.shift());
        let gold = Number(tokens.shift());
        let town = { population: population, gold: gold }

        if (townName in towns) {
            towns[townName]["population"] += population;
            towns[townName]["gold"] += gold;

        } else {
            towns[townName] = town;
        }

        command = input.shift();
    }

    command = input.shift();

    while (command != "End") {
        let tokens = command.split(`=>`);
        let operation = tokens.shift();
        let townName = tokens.shift();

        if (operation == "Plunder") {
            let people = Number(tokens.shift());
            let gold = Number(tokens.shift());

            if (towns[townName]["population"] < people) {
                people = towns[townName]["population"];
            }

            if (towns[townName]["gold"] < gold) {
                gold = towns[townName]["gold"];
            }

            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            towns[townName]["population"] -= people;
            towns[townName]["gold"] -= gold

            if (towns[townName]["population"] <= 0 || towns[townName]["gold"] <= 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }

        } else if (operation == "Prosper") {
            let gold = Number(tokens.shift());

            if (gold > 0) {

                towns[townName]["gold"] += gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${towns[townName]["gold"]} gold.`);

            } else {
                console.log(`Gold added cannot be a negative number!`);
            }

        }

        command = input.shift();
    }

    let townsToRaid = Object.keys(towns);

    if (townsToRaid.length > 0) {
        console.log(`Ahoy, Captain! There are ${townsToRaid.length} wealthy settlements to go to:`);

        for (city in towns) {
            console.log(`${city} -> Population: ${towns[city]["population"]} citizens, Gold: ${towns[city]["gold"]} kg`);
        }

    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
