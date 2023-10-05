function magicMatrices(arr) {

    let rowsArr = [];
    let columnArr = [];
    isMagic = true;


    for (let i = 0; i < arr.length; i++) {

        let rowSum = 0;
        let columnSum = 0;

        for (let j = 0; j < arr.length; j++) {

            rowSum += arr[i][j];
            columnSum += arr[j][i];
        }

        rowsArr.push(rowSum)
        columnArr.push(columnSum)
    }

    let targert = rowsArr[0];

    for (let k = 0; k < rowsArr.length; k++) {
    
        if (targert !== rowsArr [k] || targert !== columnArr[k]){
            isMagic = false;
            break;
        }

    }

    console.log(isMagic);

}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])