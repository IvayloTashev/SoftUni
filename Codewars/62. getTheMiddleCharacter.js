/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

    If the string's length is odd, return the middle character.
    If the string's length is even, return the middle 2 characters.

Examples:

"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
    let res = [];

    if (s.length % 2 === 0) {
        res.push(s[s.length / 2 - 1], s[s.length / 2]);
    } else if (s.length === 1) {
        res.push(s)
    } else {
        res.push(s[Math.floor(s.length / 2)])
    }

    return res.join('');
}

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
