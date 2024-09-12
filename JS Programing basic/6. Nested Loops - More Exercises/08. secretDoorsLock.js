function secretDoorsLock(input) {

    let firstNumEnd = Number(input[0]);
    let secondNumEnd = Number(input[1]);
    let thirdNumEnd = Number(input[2]);
    let buffer = "";


    for (let a = 1; a <= firstNumEnd; a ++) {
        for (let b = 1; b <= secondNumEnd; b ++) {
            for (let c = 1; c <= thirdNumEnd; c ++) {

                if (a % 2 === 0 && c % 2 === 0) {

                    if (b === 2 || b === 3 || b === 5 || b ===7) {
                        console.log(`${a} ${b} ${c}`);
                    }

                }

            }
        }
    }

}

secretDoorsLock(["3", "5", "5"])