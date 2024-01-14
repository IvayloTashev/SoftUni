function wordsUppercase(str) {

    let pattern = /\w+/g;
    let match = str.match(pattern);
    let result = match.join(`, `).toUpperCase();

    console.log(result);

}

wordsUppercase('Hi, how are you?')
wordsUppercase('Hi, 123 how !@# are q as12dw  you?')