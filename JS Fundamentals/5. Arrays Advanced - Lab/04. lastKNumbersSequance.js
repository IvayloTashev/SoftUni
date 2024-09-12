function lastKNumbersSequance(arrLength, num) {

    let arr = [1];

    for (let i = 0; i < arrLength - 1; i++) {

        let sum = 0;

        if (arr.length > num) {
            numsForSum = arr.slice(-num);

            for (let j = 0; j < numsForSum.length; j++) {
                sum += numsForSum[j];
            }

        } else {
            numsForSum = arr.slice();

            for (let j = 0; j < numsForSum.length; j++) {
                sum += numsForSum[j];
            }
        }

        arr.push(sum);

    }

    console.log(arr.join(` `));

}

lastKNumbersSequance(8, 2)