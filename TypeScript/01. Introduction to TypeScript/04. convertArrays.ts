function convertArrays(arr: string[]): [string, number] {
    const concatStr = arr.join('');

    return [concatStr, concatStr.length]
}

console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
