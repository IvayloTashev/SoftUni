function addAndSubtract(arr) {

    let modifiedArr = [];
    let sumOfModifiedArr = 0;
    let sumOfArr = 0;

    for (let i = 0; i < arr.length; i++) {

        sumOfArr += arr[i];

        let currentNum = 0;

        if (arr[i] % 2 == 0) {

            currentNum = arr[i] + i;
            sumOfModifiedArr += currentNum;

        } else {

            currentNum = arr[i] - i;
            sumOfModifiedArr += currentNum;
        }

        modifiedArr.push(currentNum);

    }

    console.log(modifiedArr);
    console.log(sumOfArr);
    console.log(sumOfModifiedArr);

}

addAndSubtract([-5, 11, 3, 0, 2])