function replaceRepeatingChars(str) {

    let result = ``;
    let prevChar = ``;

    for (let curChar of str) {
        
        if (curChar != prevChar) {
            result += curChar;
            prevChar = curChar
        }

    }

    console.log(result);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')