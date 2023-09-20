function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let evenSum = 0;
    let oddSum = 0;
    let buffer = "";
    let printCurrentNumber = "";


    for (let i = start; i <= end; i++) {

        buffer += i;

        for (let a = 0; a < Number(buffer.length); a++) {

            let currentNum = Number(buffer[a]);
            if (a % 2 === 0) {
                evenSum += currentNum;
            } else {
                oddSum += currentNum;
            }

        }

        if (evenSum === oddSum) {
            printCurrentNumber += buffer + " ";
            buffer = "";
        } else {
            buffer = "";
        }

        evenSum = 0;
        oddSum = 0;
    }

    console.log(printCurrentNumber);

}

equalSumsEvenOddPosition(["100000",
    "100050"])

