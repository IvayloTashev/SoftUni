function subSum(arr, start, end) {

    if (!(Array.isArray(arr))) {
        return NaN;
    }

    for (let el of arr) {
        if (typeof(el) != "number") {
            return NaN;
        }
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= arr.length) {
        end = arr.length - 1;
    }

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += arr[i];
    }

    return result;

}

// subSum([10, 20, 30, 40, 50, 60], 3, 300);
// subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
// subSum([], 1, 2);
// subSum('text', 0, 2);