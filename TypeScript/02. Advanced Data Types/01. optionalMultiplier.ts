function optionalMultiplier(x?: string | number, y?: string | number, z?: string | number): number {
    
    //Solution 1
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

    //Solution 2

    // let num1 = x == undefined ? 1 : Number(x);
    // let num2 = y == undefined ? 1 : Number(y);
    // let num3 = z == undefined ? 1 : Number(z);

    // return num1 * num2 * num3;
}

console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());






