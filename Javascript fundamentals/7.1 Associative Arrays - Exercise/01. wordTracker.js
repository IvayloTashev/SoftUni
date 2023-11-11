function wordTracker(input) {

    let words = input.shift().split(` `);

    let wordsOccurrences = {};

    for (let word of words) {
        wordsOccurrences[word] = 0;
    }

    for (let word of input) {
        let curWord = word.split(` `);

        if (curWord in wordsOccurrences) {
            wordsOccurrences[curWord]++;
        }
    }

    let entries = Object.entries(wordsOccurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, repeats] of entries) {
        console.log(word, `-`, repeats);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])