function largestNumber(...nums) {

    let largestNum = Math.max(...nums)

    console.log(`The largest number is ${largestNum}.`);

}

largestNumber(5, -3, 16)