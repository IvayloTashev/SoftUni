function argumentInfo(...data) {
    let result = {};

    for (let element of data) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (result.hasOwnProperty(type)) {
            result[type] += 1;
        } else {
            result[type] = 1
        }
    }

    sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
    
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)