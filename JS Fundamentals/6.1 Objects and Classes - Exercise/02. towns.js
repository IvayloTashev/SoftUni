function towns(arr) {

    let towns = {};

    for (let row of arr) {
        let tokens = row.split(` | `);
        let townName = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
        towns = { town: townName, latitude: latitude, longitude: longitude }
        console.log(towns);
    }

}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])