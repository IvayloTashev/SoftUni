function findShort(s) {

let arr = s.split(` `);

let length = 100;

for (let word of arr) {

    currWordLength = word.length;

    if (currWordLength < length) {
        length = currWordLength;
    }

}

console.log(length);


}

findShort("Let's travel abroad shall we")


/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Examples:
"bitcoin take over the world maybe who knows perhaps"), 3);
"turns out random test cases are easier than writing out basic ones"), 3); 
"Let's travel abroad shall we"), 2);
*/