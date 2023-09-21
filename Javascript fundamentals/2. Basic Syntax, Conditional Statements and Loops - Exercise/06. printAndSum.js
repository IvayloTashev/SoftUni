function printAndSum(start, end) {

    let print = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        print += i + " ";
        sum += i;
    }

    console.log(print);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)