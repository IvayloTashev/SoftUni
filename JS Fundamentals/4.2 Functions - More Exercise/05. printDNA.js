function printDNA(num) {

    let sequence = "ATCGTTAGGG";
    let sequenceArr = sequence.split("");

    let counter = 0;
    let output = ``;

    for (let i = 1; i <= num; i++) {

        let firstSymbol = sequenceArr[0];
        let secondSymbol = sequenceArr[1];

        counter++;

        if (counter === 1) {
            output = `**${firstSymbol}${secondSymbol}**`;
        } else if (counter === 2 || counter === 4) {
            output = `*${firstSymbol}--${secondSymbol}*`
        } else if (counter === 3) {
            output = `${firstSymbol}----${secondSymbol}`
        }

        if (counter === 4) {
            counter = 0;
        }

        console.log(output);

        for (let j = 1; j <= 2; j++) {
            let changeFirstTwoSymbols = sequenceArr.shift();
            sequenceArr.push(changeFirstTwoSymbols);
        }

    }

}

printDNA(11)