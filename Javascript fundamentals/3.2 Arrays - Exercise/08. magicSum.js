function magicSum(arr, num) {

    let magicNums = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            let sum = 0;

            sum = arr[i] + arr[j];

            if (arr[i] + arr[j] == num) {

                magicNums.push(arr[i], arr[j]);
                
            }

            if (magicNums.length == 2) {
                console.log(magicNums.join(` `));
                magicNums = [];
            }
        }
    }

}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)