function triplesOfLatinLetters(num) {

    let letter = String.fromCharCode(92);

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                console.log(String.fromCharCode(97 + i, 97 + j, 97 + k));
            }

        }

    }

}

triplesOfLatinLetters(3)