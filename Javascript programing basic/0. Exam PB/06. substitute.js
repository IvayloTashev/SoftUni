function substitute(input) {

    let firstDigitFirstNum = Number(input[0]);
    let secondDigitFirstNum = Number(input[1]);
    let firstDigitSecondNum = Number(input[2]);
    let secondDigitSecondNum = Number(input[3]);
    let changeCounter = 0;


    for (let k = firstDigitFirstNum; k <= 8; k++) {
        for (let l = 9; l >= secondDigitFirstNum; l--) {
            for (let m = firstDigitSecondNum; m <= 8; m++) {
                for (let n = 9; n >= secondDigitSecondNum; n--) {

                    if (changeCounter === 6) {
                        break;
                    }

                    if (k % 2 === 0 && l % 2 !== 0 && m % 2 === 0 && n % 2 !== 0) {

                        if (k === m && l === n) {
                            console.log(`Cannot change the same player.`);
                        } else {
                            changeCounter++;
                            console.log(`${k}${l} - ${m}${n}`);
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"])
