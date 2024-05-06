/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
    let result = true;

    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!string.toLowerCase().includes(char)) {
            result = false;
            break;
        }
    }

    return result;
}

isPangram("The quick brown fox jumps over the lazy dog.");