function pascalCaseSplitter(str) {

    let strArr = str.split(``);
    let words = [];
    let buff = strArr.shift();


    for (let i = 0; i < strArr.length; i++) {

        let curChar = strArr[i];

        if (/[A-Z]/.test(strArr[i])) {
            words.push(buff);
            buff = ``;
            buff += curChar;

        } else {
            buff += curChar;
        }

        if (i == strArr.length - 1) {
            words.push(buff);
        }

    }

    console.log(words.join(`, `));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
