/*
Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string){
    
    let words = string.split(" ");
    let result = [];

    for (let word of words) {
        if (word.length >= 5) {
            let reversedWord = word.split("").reverse().join("");
            result.push(reversedWord);
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
}

spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");