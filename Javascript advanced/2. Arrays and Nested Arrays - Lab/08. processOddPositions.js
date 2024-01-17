function processOddPositions(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    result = result.map((x) => x * 2).reverse();

    return result;

}

processOddPositions([3, 0, 10, 4, 7, 3])