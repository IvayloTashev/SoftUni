function primeNumberChecker(num) {

    let counter = 0;

    for (let i = num; i >= 1; i--) {

        if (num % i == 0) {
            counter++;
        }

    }

    if (counter == 2) {
        console.log('true');
    } else {
        console.log('false');
    }

}

primeNumberChecker(4)