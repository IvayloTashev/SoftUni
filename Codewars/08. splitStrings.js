/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Exaple 1 - "abcdef" // ["ab", "cd", "ef"]
Exaple 2 - solution("abcdefg") // ["ab", "cd", "ef", "g_"]
Exaple 3 - solution("") // []
*/

function solution(str) {

    let buff = str;
    let result = [];

    if (str.length % 2 != 0) {
        buff += "_";
    }

    for (let i = 0; i < buff.length; i += 2) {
        let currChar = buff[i];
        let nextChar = buff[i + 1];

        result.push(currChar + nextChar);
    }

    return result;

}

solution("abcdef")