function printNthElement (arr) {

    let step = Number(arr[arr.length - 1]);

    reducedArr = [];

    for (let i = 0; i < arr. length - 1; i+= step) {

        reducedArr.push(arr[i])
    }

    console.log(reducedArr.join(` `));
    
}

printNthElement(['5', '20', '31', '4', '20', '2'])