function echoType(input) {

    let inputType = typeof input;

    if (inputType == "string" || inputType == "number") {

        console.log(inputType);
        console.log(input);

    } else {
        console.log(inputType);
        console.log(`Parameter is not suitable for printing`);
    }

}

echoType('Hello, JavaScript!')

