function magicMatrices(input) {

    for (let i = 0; i < input.length -1 ; i++) {

        let rowOne = input.reduce((acc, val) => {
            acc += val[i];
            return acc;
        }, 0)

        let rowTwo = input.reduce((acc, val) => {
            acc += val[i + 1];
            return acc;
        }, 0)

        let colOne = input[i].reduce((acc, val) => {
            acc + val;
        }, 0)

        let colTwo = input[i + 1].reduce((acc, val) => {
            acc + val;
        }, 0)

        if (rowOne != rowTwo || colOne != colTwo) {
            return false
        }

    }

    return true

}

magicMatrices([[1, 0, 0],
[0, 0, 1],]



)