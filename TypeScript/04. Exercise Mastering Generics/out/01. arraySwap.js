"use strict";
function swap(a, aIndex, b, bIndex) {
    let buff = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = buff;
}
// let a = ['test', '123'];
// let b = ['a', 'b', 'c'];
// swap<string>(a, 0, b, 2);
// console.log(a) //['c', '123']
// console.log(b) //['a', 'b', 'test']
let a = [20, 30, 40];
let b = [1, 2, 3, 4, 5];
swap(a, 0, b, 2);
console.log(a); //[3, 30, 40]
console.log(b); //[1, 2, 20, 4, 5]
//# sourceMappingURL=01.%20arraySwap.js.map