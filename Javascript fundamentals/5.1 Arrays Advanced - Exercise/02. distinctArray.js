function distinctArray(arr) {

    let finalArr = [];

    for (let num of arr) {

        if (!finalArr.includes(num)) {
            finalArr.push(num);
        }
    }

    console.log(finalArr.join(` `));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])