function smallestTwoNumbers(arr) {

    arr.sort((a,b) => a - b);

    console.log(arr.slice(0, 2).join(` `));

}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])