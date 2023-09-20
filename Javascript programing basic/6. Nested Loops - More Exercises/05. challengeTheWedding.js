function challengeTheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let dateCounter = 0;
    let buffer = "";
    let isFull = false;


    for (let m = 1; m <= men; m++) {
        for (let f = 1; f <= women; f++) {

            if (dateCounter >= tables) {
                isFull = true;
                break;
            }

            dateCounter++;
            buffer += `(${m} <-> ${f}) `

        }

        if (isFull) {
            break;
        }

    }

    console.log(buffer);

}

challengeTheWedding(["2", "2", "3"])