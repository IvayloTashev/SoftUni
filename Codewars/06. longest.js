function longest(s1, s2) {

    let s3 = s1 + s2;

    let mergedStr = "";

    for (let char of s3) {

        code = char.charCodeAt();

        if (code >= 97 && code <= 122) {
            mergedStr += char;
        }
    }

    let result = [...new Set(mergedStr.split(``))].sort((a, b) => a.localeCompare(b)).join(``);

    return result;

}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/