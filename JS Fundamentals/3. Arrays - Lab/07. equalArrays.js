function equalArrays(arr1, arr2) {

    let sum = 0;
    let isIndencical = true;

    for (let i = 0; i < arr1.length; i++) {

        if (Number(arr1[i]) != Number(arr2[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIndencical = false;
            break;

        } else {
            sum += Number(arr1[i])
        }    
    }
    
    if (isIndencical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['10','20','30'], ['10','20','30'])