function profit(input) {


    let banknotesOf1Lv = Number(input[0]);
    let banknotesOf2Lv = Number(input[1]);
    let banknotesOf5Lv = Number(input[2]);
    let sum = Number(input[3]);


    for (let a = 0; a <= banknotesOf1Lv; a++) {
        for (let b = 0; b <= banknotesOf2Lv; b++) {
            for (let c = 0; c <= banknotesOf5Lv; c++) {

                let currentSum = (a * 1) + (b * 2) + (c * 5);

                if (currentSum === sum) {
                    console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`);

                }

            }


        }

    }

}

profit(["3", "2", "3", "10"])