function luckyNumbers(input) {

    let num = Number(input[0]);

    let fistTwoSum = 0;
    let lastTwoSum = 0;
    let buffer = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    let currentNumber = a + b;
                    if (num % currentNumber === 0) {
                        fistTwoSum += a + b;
                        lastTwoSum += c + d;

                        if (fistTwoSum === lastTwoSum) {
                            buffer += `${a}${b}${c}${d} `;
                        } else {
                            fistTwoSum = 0;
                            lastTwoSum = 0;
                        }
                    }
                }
            }
        }
    }

    console.log(buffer);

}

luckyNumbers(["3"])