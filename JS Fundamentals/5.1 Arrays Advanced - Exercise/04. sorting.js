function sorting(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let finalArr = [];

    while (arr.length > 0) {

        maxNum = arr.pop();
        minNum = arr.shift();

        finalArr.push(maxNum, minNum);
    }

    console.log(finalArr.join(` `));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])