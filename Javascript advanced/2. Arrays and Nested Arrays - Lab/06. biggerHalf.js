function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => a - b);
    let secondHalf = sorted.slice(sorted.length / 2);

    return secondHalf;
}

biggerHalf([4, 7, 2, 5])
console.log("---------");
biggerHalf([3, 19, 14, 7, 2, 19, 6])