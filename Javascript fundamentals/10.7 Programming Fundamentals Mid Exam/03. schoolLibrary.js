function schoolLibrary(arr) {

    let bookList = arr.shift().split(`&`);
    let command = arr.shift();

    while (command != `Done`) {

        let tokens = command.split(` | `)
        let operation = tokens[0];
        let bookName = tokens[1];


        if (operation == `Add Book`) {

            if (!bookList.includes(bookName)) {
                bookList.unshift(bookName);
            }

        } else if (operation == `Take Book`) {

            if (bookList.includes(bookName)) {
                let index = bookList.indexOf(bookName);
                bookList.splice(index, 1);
            }

        } else if (operation == `Swap Books`) {
            let bookName2 = tokens[2];

            if (bookList.includes(bookName) && bookList.includes(bookName2)) {
                let index1 = bookList.indexOf(bookName);
                let index2 = bookList.indexOf(bookName2);

                let buff = bookList[index1];
                bookList[index1] = bookList[index2];
                bookList[index2] = buff;
            }

        } else if (operation == `Insert Book`) {

            if (!bookList.includes(bookName)) {
                bookList.push(bookName);
            }

        } else if (operation == `Check Book`) {
            let index = Number(tokens[1]);

            if (index >= 0 && index < bookList.length) {
                console.log(bookList[index]);
            }
        }

        command = arr.shift();
    }

    console.log(bookList.join(`, `));

}


schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",

"Check Book | 2",

"Swap Books | Don Quixote | Ulysses",

"Done"])