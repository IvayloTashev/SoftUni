function sameNumbers(num) {

    let numAsStr = num.toString();
    let isSame = true;
    let sum = 0;
    let buff = numAsStr[0];

    for (let num of numAsStr) {

        if (num != buff) {
            isSame = false;
        }

        sum += Number(num);

    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)