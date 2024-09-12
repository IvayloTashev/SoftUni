function revealWords(words, sentance) {

    let wordsArr = words.split(`, `);


    for (let word of wordsArr) {
        let templete = `*`.repeat(word.length);
        sentance = sentance.replace(templete, word);

    }

    console.log(sentance);

}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')