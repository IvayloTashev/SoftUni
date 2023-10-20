function bombNumbers(arr, bombInfo) {

    let BombNum = bombInfo[0];
    let power = bombInfo[1];

    while (arr.includes(BombNum)) {

        let index = arr.indexOf(BombNum);
        arr.splice(Math.max(0, index - power), power * 2 + 1);
    }

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])