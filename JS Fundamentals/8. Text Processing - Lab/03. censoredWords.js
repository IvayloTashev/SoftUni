function censoredWords(sentance, word) {

    let censor = "*".repeat(word.length);

    let result = sentance;

    while (result.includes(word)) {
        result = result.replace(word, censor);

    }

    console.log(result);

}

censoredWords('A small sentence with some words', 'small')
censoredWords('A small small small small words', 'small')
