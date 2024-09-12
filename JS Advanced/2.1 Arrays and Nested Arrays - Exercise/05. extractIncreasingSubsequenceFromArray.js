function extractIncreasingSubsequenceFromArray(arr) {

    let result = [];
    let biggestOne = Number.MIN_SAFE_INTEGER

    for (let num of arr) {
        if (num >= biggestOne) {
            result.push(num);
            biggestOne = num;
        }
    }

    return result;

}

extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    )