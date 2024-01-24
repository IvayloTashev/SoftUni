function townsToJSON(input) {

    let result = [];
    let keys = input.shift().split('|').filter(x => x !== '').map(x => x.trim());

    for (let line of input) {
        let [town, latitude, longitude] = line.split('|').filter(x => x !== '').map(x => x.trim());
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({ [keys[0]]: town, [keys[1]]: Number(latitude), [keys[2]]: Number(longitude) });
    }

    console.log(JSON.stringify(result));
}
    
// townsToJSON([
// '| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'
// ])

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)

