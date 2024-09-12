function townPopulation(arr) {

    let result = {};

    for (let row of arr) {
        tokens = row.split(` <-> `);
        let [city, population] = tokens;
        population = Number(population);

        if (!result.hasOwnProperty(city)) {
            result[city] = population;
        } else {
            result[city] += population;
        }
    }

    let entries = Object.entries(result);

    for (let [townName, townPopulation] of entries) {
        console.log(`${townName} : ${townPopulation}`);
    }

}

townPopulation([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
])