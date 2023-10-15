function negativeOrPositiveNumbers(arr) {

    let newArr = [];

    for (let item of arr) {
        num = Number(item);

        if (num < 0) {
            newArr.unshift(item);

        } else {
            newArr.push(item);
        }

    }

    console.log(newArr.join(`\n`));


}

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])