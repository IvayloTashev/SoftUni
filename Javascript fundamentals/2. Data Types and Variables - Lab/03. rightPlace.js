function rightPlace(str1, char, str2) {

    let print = "";

    for (let i = 0; i < str1.length; i++) {

        if (str1[i] != "_") {
            print += str1[i];
        } else {
            print += char;
        }

    }

    if (print == str2) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }

}

rightPlace('Str_ng', 'I', 'String')