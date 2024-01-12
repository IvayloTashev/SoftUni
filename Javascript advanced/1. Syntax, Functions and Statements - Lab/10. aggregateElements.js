function aggregateElements(arr) {

    let sum = 0;
    let sumInverse = 0;
    let concat = ``;

    for (let num of arr) {
        sum += num;
        sumInverse += 1 / num;
        concat += num;

    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);

}

aggregateElements([1, 2, 3])