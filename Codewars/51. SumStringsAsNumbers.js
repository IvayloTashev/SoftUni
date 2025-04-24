/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

//Solution wihtout using BigInt
function sumStrings(a, b) {
    let res = [];
    let carry = 0;

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry; i--, j--) {
        let x = Number(a[i]) ? Number(a[i]) : 0;
        let y = Number(b[j]) ? Number(b[j]) : 0;

        let curr = x + y;

        if (carry == 1) {
            curr += 1;
            carry = 0;
        }

        if (curr > 9) {
            carry = 1;
            let str = curr.toString()
            res.unshift(str[1]);
        } else {
            let str = curr.toString()
            res.unshift(str);
        }
    }

    while (res.length > 1 && res[0] === '0') {
        res.shift();
    }

    console.log(res.join(''));
    

    return res.join('');

}

sumStrings('0000000000000000000001', '9999999999999999999999')