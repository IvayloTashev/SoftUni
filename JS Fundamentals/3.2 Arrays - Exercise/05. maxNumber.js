function maxNumber(arr) {

    let topNums = [];

    for (let i = 0; i < arr.length; i++) {

        let isTopNum = true;
        let currentNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            if (currentNum <= arr[j]) {
                isTopNum = false;
                break;
            }
        }

        if (isTopNum) {
            
            topNums.push(currentNum);
        }
    }

    console.log(topNums.join(` `));

}

maxNumber([27, 19, 42, 2, 13, 45, 48])