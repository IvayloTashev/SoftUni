function palindromeIntegers(arr) {

    let arrToStr = arr.toString().split(`,`)

    for (let currArr of arrToStr) {

        isPalindrom = true;

        let reversed = ``;

        for (let i = currArr.length - 1; i >= 0; i--) {

            reversed += currArr[i];

        }

        if (reversed !== currArr) {
            isPalindrom = false;
            console.log(isPalindrom);

        } else {
            console.log(isPalindrom);

        }

    }

}

palindromeIntegers([32,2,232,1010])