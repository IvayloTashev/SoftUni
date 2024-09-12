function processOddNumbers(arr) {

    let arrOddInx = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 != 0) {
            arrOddInx.push(arr[i]);
        }

    }

    modifiedArr = arrOddInx.map((x) => x * 2)
    reversedArr = modifiedArr.reverse();

    console.log(reversedArr.join(` `));

}

processOddNumbers([10, 15, 20, 25])