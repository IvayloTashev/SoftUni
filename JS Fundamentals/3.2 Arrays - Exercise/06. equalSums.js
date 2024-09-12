function equalSums(arr) {

    let index = 0;
    isEqual = false;

    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        let rightSum = 0;

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum == rightSum) {
            index = i;
            isEqual = true;
        }

    }

    if (arr.length == 1) {
        isEqual = true;
    }

    if (isEqual) {
        console.log(index);

    } else {
        console.log(`no`);
    }

}

equalSums([1])