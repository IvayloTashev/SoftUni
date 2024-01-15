function lastKNumbersSequence(n, k) {

    let result = [1, ];

    for (let i = 1; i < n; i++) {

        let lastNumbers = result.slice(-k);

        let sum = 0;

        for (let num of lastNumbers) {
            sum += num;
        }

        result.push(sum);

    }

    return result;
}

lastKNumbersSequence(6, 3)