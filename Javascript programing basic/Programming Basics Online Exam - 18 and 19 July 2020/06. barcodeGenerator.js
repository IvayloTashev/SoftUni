function barcodeGenerator(input) {

    let start = input[0];
    let startZero = Number(start[0]);
    let startOne = Number(start[1]);
    let startTwo = Number(start[2]);
    let startThree = Number(start[3]);
    let end = input[1];
    let endZero = Number(end[0]);
    let endOne = Number(end[1]);
    let endTwo = Number(end[2]);
    let endThree = Number(end[3]);

    let buffer = "";

    for (let a = startZero; a <= endZero; a++) {
        for (let b = startOne; b <= endOne; b++) {
            for (let c = startTwo; c <= endTwo; c++) {
                for (let d = startThree; d <= endThree; d++) {

                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buffer += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }

    console.log(buffer);

}

barcodeGenerator(["2345", "6789"])
