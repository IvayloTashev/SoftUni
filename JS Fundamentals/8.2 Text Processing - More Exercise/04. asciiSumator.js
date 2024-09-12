function asciiSumator(input) {

    let [char1, char2, string] = input;
    
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let sum = 0;

    for (let char of string) {
        charCode = char.charCodeAt();

        if (code1 < code2) {

            if (charCode > code1 && charCode < code2) {
                sum += charCode;
            }

        } else {

            if (charCode > code2 && charCode < code1) {
                sum += charCode;
            }
        
        }
 
    }

    console.log(sum);

}

asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)