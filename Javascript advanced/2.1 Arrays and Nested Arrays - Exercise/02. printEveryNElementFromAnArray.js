function printEveryNElementFromAnArray(arr, num) {

    result = [];

    for (let i = 0; i < arr.length; i += num) {
        result.push(arr[i]);
    }

    return result;

}

printEveryNElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2)