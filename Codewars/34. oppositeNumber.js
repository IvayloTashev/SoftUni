/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {

    return number - number * 2;

}

opposite(1) // -1
opposite(14) // -1
opposite(-34) // -1