function wordOccurrences (arr) {

    let wordsOccurrences = {};

    for (let word of arr) {

        if (word in wordsOccurrences) {
            wordsOccurrences[word] += 1;

        } else {
            wordsOccurrences[word] = 1;
        }

    }

    let entries = Object.entries(wordsOccurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, repeats] of entries) {
        console.log(word, `->`, repeats, `times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])

