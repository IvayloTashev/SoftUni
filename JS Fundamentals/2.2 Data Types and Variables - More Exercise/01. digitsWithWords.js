function digitsWithWords(str) {

    let strAsNum = 0;

    switch (str) {
        case 'zero': strAsNum = 0;
            break;
        case 'one': strAsNum = 1;
            break;
        case 'two': strAsNum = 2;
            break;
        case 'three': strAsNum = 3;
            break;
        case 'four': strAsNum = 4;
            break;
        case 'five': strAsNum = 5;
            break;
        case 'six': strAsNum = 6;
            break;
        case 'seven': strAsNum = 7;
            break;
        case 'eight': strAsNum = 8;
            break;
        case 'nine': strAsNum = 9;
            break;
    }

    console.log(strAsNum);

}

digitsWithWords('nine')