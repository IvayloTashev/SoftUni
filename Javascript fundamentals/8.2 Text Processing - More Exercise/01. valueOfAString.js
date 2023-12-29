function valueOfAString(input) {

    let string = input.shift();
    let caseType = input.shift();

    let sum = 0;

    for (let char of string) {

        let code = char.charCodeAt();

        if (caseType == "LOWERCASE") {

            if (code >= 97 && code <= 122) {
                sum += code;
            }

        } else if (caseType == "UPPERCASE") {

            if (code >= 65 && code <= 90) {
                sum += code;
            }

        }
        
    }

    console.log(`The total sum is: ${sum}`);

}

valueOfAString(['AC/DC',
'UPPERCASE']

)