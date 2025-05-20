function optionalMultiplier(x?: string | number, y?: string | number, z?: string | number): number {
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

console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier('2', '2'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());






