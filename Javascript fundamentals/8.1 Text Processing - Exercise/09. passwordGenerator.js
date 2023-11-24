function passwordGenerator(inputArr) {

    let strOne = inputArr.shift();
    let strTwo = inputArr.shift();
    let word = inputArr.shift();

    let concatStr = strOne + strTwo;
    let index = 0;

    for (let char of concatStr) {

        if (/[aoeiu]/.test(char)) {
            concatStr = concatStr.replace(char, word[index].toUpperCase())
            index++;
        }

        if (index == word.length) {
            index = 0;
        }
    }

    let password = concatStr.split(``).reverse().join(``);

    console.log(`Your generated password is ${password}`);

}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])