function firstAndLastKNumbers(arr) {

    let num = arr.shift();

    let fistElements = arr.slice(0, num);
    let lastElements = arr.slice(-num);

    console.log(fistElements.join(` `));
    console.log(lastElements.join(` `));

}

firstAndLastKNumbers([3,
    6, 7, 8, 9])