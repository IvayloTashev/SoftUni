function oldBooks(input) {


    let aniFavoriteBook = input[0];

    let index = 1;
    let command = input[index];
    let books = 0;
    let wasFound = false;

    while (command !== "No More Books") {

        if (command === aniFavoriteBook) {
            console.log(`You checked ${books} books and found it.`);
            wasFound = true;
            break;
        }

        books++
        index++
        command = input[index];
    }

    if (!wasFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${books} books.`);
    }

}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])

