function cutAndReverse(str) {

    let sentanceOne = str.slice(0, str.length / 2).split(``).reverse().join(``);
    let sentanceTwo = str.slice(str.length / 2).split(``).reverse().join(``);

    console.log(sentanceOne);
    console.log(sentanceTwo);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')