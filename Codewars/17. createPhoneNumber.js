/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
    let start = ["("];
    let mid = "";
    let end = "";
    let result = "";

    for (let i = 0; i < numbers.length; i++) {
        if (i <= 2) {
            start.push(numbers[i]);
        } else if (i <= 5){
            mid += numbers[i];
        } else {
            end += numbers[i];
        }
    }

    start.push(")");
    result = start.join("") + " " + mid + "-" + end;
    return result;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

