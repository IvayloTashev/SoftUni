function arrayRotation(arr, num) {

    let newArr = [];

    for (let i = 0; i < num; i++) {

        let currentNum = arr[i];
        arr.push(currentNum);
    }

    newArr = arr.slice(num);
    console.log(newArr.join(` `));

}

arrayRotation([51, 47, 32, 61, 21], 2)