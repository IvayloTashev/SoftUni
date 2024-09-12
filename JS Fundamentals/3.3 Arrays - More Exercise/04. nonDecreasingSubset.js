function nonDecreasingSubset(arr) {

    newArr = [];
    let currentNum = 0;

    for (num of arr) {

        if (num >= currentNum) {
            currentNum = num;
            newArr.push(num);
        }
    }

    console.log(newArr.join(` `));

}

nonDecreasingSubset([ 20, 3, 2, 20, 15, 6, 1])