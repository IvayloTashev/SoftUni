/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:
    Find the unique number (this kata)
    Find the unique string
    Find The Unique
*/

function findUniq(arr) {
    let uniques = [...new Set(arr)];

    for (let i = 0; i < uniques.length; i++) {
        
        if (arr.filter(num => num == uniques[i]).length == 1) {
            return uniques[i]
        }
    }
}

// findUniq([1, 1, 1, 2, 1, 1, 2, 3]) // 2
// findUniq([0, 0, 0.55, 0, 0]) // 0.55
findUniq([1, 0, 0]) // 1
findUniq([0, 1, 0]) // 1
findUniq([0, 0, 1]) // 1
findUniq([1, 1, 1, 2, 1, 1]) // 2
findUniq([1, 1, 2, 1, 1]) // 2
findUniq([3, 10, 3, 3, 3]) // 10