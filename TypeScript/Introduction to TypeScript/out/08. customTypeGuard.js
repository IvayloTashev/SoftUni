"use strict";
function isNonEmptyStringArray(arr) {
    return Array.isArray(arr) && arr.length >= 1 && arr.every(el => typeof el === "string");
}
let arr = ['123', '123'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
//# sourceMappingURL=08.%20customTypeGuard.js.map