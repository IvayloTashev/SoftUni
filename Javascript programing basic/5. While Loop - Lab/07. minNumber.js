function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++

    let MinNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {

        let currentNum = Number(command);

        if (MinNum > currentNum) {
            MinNum = currentNum;
        }

        command = input[index];
        index++

    }

    console.log(MinNum);

}

minNumber(["-10",
    "20",
    "-30",
    "Stop"])
