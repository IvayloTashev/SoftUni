"use strict";
function optionalMultiplier(x, y, z) {
    let res = 1;
    if (x) {
        if (typeof x === 'string') {
            x = Number(x);
        }
        res *= x;
    }
    if (y) {
        if (typeof y === 'string') {
            y = Number(y);
        }
        res *= y;
    }
    if (z) {
        if (typeof z === 'string') {
            z = Number(z);
        }
        res *= z;
    }
    return res;
}
console.log(optionalMultiplier(0, 2, 2));
//# sourceMappingURL=01.%20optionalMultiplier.js.map