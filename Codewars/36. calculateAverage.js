/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
    let sum = 0;
    if (array.length > 0) {
        array.forEach(num => {
            sum += num
        });
        return sum / array.length
    } else {
        return 0
    }
}

findAverage([1, 1, 1]) // 1
findAverage([1, 2, 3]) // 2
findAverage([1, 2, 3, 4]) // 2.5
findAverage([]) // 0
