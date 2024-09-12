function amazingNumbers(num) {

    let numAsString = String(num);
    let sum = 0;
    let isAmazing = "False";


    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let sumAsString = String(sum);

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == 9) {
            isAmazing = "True";
            break;
        }

    }

    console.log(`${num} Amazing? ${isAmazing}`);

}

amazingNumbers(999)