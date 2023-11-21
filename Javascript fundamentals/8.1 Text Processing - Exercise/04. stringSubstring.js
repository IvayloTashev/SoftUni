function stringSubstring(word, text) {

    text = text.toLowerCase();
    let testArr = text.split(` `);

    if (testArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('java', 'JavaScript is the best programming language')