function cake(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);

    let index = 2;
    let command = input[index];

    let cake = width * lenght;

    while (command !== "STOP") {

        let pieces = Number(command);
        cake -= pieces;
        if (cake < 0) {
            break;
        }

        index++;
        command = input[index];
    }

    if (cake > 0) {
        console.log(`${cake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
    }

}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])
