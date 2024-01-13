function greatestCommonDivisor(num1, num2) {

    //2154 = 458 * q + r

    let q = Math.floor(num1 / num2);
    let r = num1 % num2;

    num1 = num2 * q + r;

    while (r != 0) {

        num1 = num2;
        num2 = r;
        q = Math.floor(num1 / num2);
        r = num1 % num2;

    }

    console.log(num2);

}

greatestCommonDivisor(3768, 1701)