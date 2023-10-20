function searchForANumber(arr1, arr2) {

    let elsToTake = arr2[0];
    let elsToDelete = arr2[1];
    let elToSearch = arr2[2];

    let finalArr = arr1.slice(0, elsToTake);

    finalArr.splice(0, elsToDelete);

    let counter = 0;

    for (let i = 0; i < finalArr.length; i++) {

        if (finalArr[i] == elToSearch) {
            counter++;
        }

    }

    console.log(`Number ${elToSearch} occurs ${counter} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])