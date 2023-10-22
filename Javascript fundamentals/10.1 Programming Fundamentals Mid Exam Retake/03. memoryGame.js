function memoryGame(arr) {

    let memoryArr = arr[0].split(` `)

    let index = 1;
    let command = arr[index];
    let moves = 0;
    let playerWin = false;

    while (command != "end") {

        moves++;

        let guess = command.split(` `);
        indexOne = Number(guess[0]);
        indexTwo = Number(guess[1]);

        if (indexOne == indexTwo || indexOne > memoryArr.length -1 || indexOne < 0 || indexTwo > memoryArr.length -1 || indexTwo < 0  ) {
            console.log(`Invalid input! Adding additional elements to the board`);
            memoryArr.splice(memoryArr.length / 2, 0, `-${moves}a`, `-${moves}a`)

        } else if (memoryArr[indexOne] == memoryArr[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${memoryArr[indexOne]}!`);

            if (indexOne > indexTwo ) {
                memoryArr.splice(indexOne, 1);
                memoryArr.splice(indexTwo, 1);
            } else {
                memoryArr.splice(indexTwo, 1);
                memoryArr.splice(indexOne, 1);
            }

        } else if (memoryArr[indexOne] != memoryArr[indexTwo]) {
            console.log(`Try again!`);

        } 

        if (memoryArr.length == 0){
            playerWin = true;
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        index++;
        command = arr[index];
    }

    if (!playerWin){
        console.log(`Sorry you lose :(`);
        console.log(memoryArr.join(` `));
    }

}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])