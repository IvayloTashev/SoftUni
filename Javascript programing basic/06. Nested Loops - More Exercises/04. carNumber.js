function carNumber(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let sumOfMidNum = 0;
    let buffer = "";

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {

                    if (a % 2 === 0 && d % 2 !== 0) {

                        if (a > d) {
                            sumOfMidNum = b + c;

                            if (sumOfMidNum % 2 === 0) {
                                buffer += `${a}${b}${c}${d} `
                            }
                        }

                    } else if (a % 2 !== 0 && d % 2 === 0) {

                        if (a > d) {
                            sumOfMidNum = b + c;

                            if (sumOfMidNum % 2 === 0) {
                                buffer += `${a}${b}${c}${d} `
                            }
                        }

                    }

                }
            }
        }
    }

    console.log(buffer);

}

carNumber(["2", "3"])