function combinations(input) {

    let magicNumber = Number(input[0]);
    let counter = 0;

    for (let a = 0; a <= magicNumber; a++) {

        for (let b = 0; b <= magicNumber; b++) {

            for (let c = 0; c <= magicNumber; c++) {

                if ((a + b + c) === magicNumber) {
                    counter++
                    break;
                }
            }
        }

    }

    console.log(counter);

}

combinations(["25"])