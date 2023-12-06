function mirrorWords(arr) {
    let str = arr.shift();
    let pattern = /(?<sep>[@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let matches = str.matchAll(pattern);
    let matchCounter = 0;
    let result = [];

    for (let match of matches) {
        matchCounter++;
        let firstWord = match[2];
        let secondWord = match[3];
        let reversed = secondWord.split(``).reverse().join(``);

        if (firstWord == reversed) {
            result.push(`${firstWord} <=> ${secondWord}`)
        }
    }

    if (matchCounter > 0) {
        console.log(`${matchCounter} word pairs found!`);

    } else {
        console.log(`No word pairs found!`);
    }

    if (result.length > 0) {
        console.log(`The mirror words are:`);
        console.log(result.join(`, `));

    } else {
        console.log(`No mirror words!`);
    }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])

    