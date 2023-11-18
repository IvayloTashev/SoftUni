function countStringOccurrences(sentance, word) {

    let words = sentance.split(` `);

    let counter = 0;

    for (let element of words) {

        if (element === word) {
            counter++;
        }
    }

    console.log(counter);

}

countStringOccurrences('This is a word and it also is a sentence', 'is')