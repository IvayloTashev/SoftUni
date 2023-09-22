function reverseString(input) {

    let reverseStr = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reverseStr += input[i];
    }

    console.log(reverseStr);

}

reverseString("Hello")