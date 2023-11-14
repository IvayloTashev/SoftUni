function travelTime(input) {

    let travelInfo = {};

    for (let command of input) {

        let [country, town, cost] = command.split(` > `);
        cost = Number(cost);

        if (country in travelInfo) {

            if (town in travelInfo[country]) {

                if (cost < travelInfo[country][town]) {
                    travelInfo[country][town] = cost;
                }

            } else {
                travelInfo[country][town] = cost;
            }

        } else {
            travelInfo[country] = { [town]: cost } 
        }

    }

    let entries = Object.entries(travelInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of entries) {
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        let result = `${country} -> `;

        for (let [town, cost] of townEntries) {
            result += `${town} -> ${cost} `
        }

        console.log(result);

    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])