function passwordValidator(pass) {

    let isValidLength = checkPassLength(pass);
    let isOnlyLettersDigits = checkOnlyLettersDigits(pass);
    let isAtLeastTwoDigits = checkAtLeastTwoDigits(pass);

    function checkPassLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        } else {
            return true;
        }
    }

    function checkOnlyLettersDigits(pass) {

        for (let char of pass) {
            let code = char.charCodeAt();

            if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }

        return true;
    }

    function checkAtLeastTwoDigits(pass) {

        let digitCounter = 0;

        for (let char of pass) {
            let code = char.charCodeAt();

            if (code >= 48 && code <= 57) {
                digitCounter++;
            }
        }

        if (digitCounter < 2) {
            console.log(`Password must have at least 2 digits`);
            return false;
        } else {
            return true;
        }
    }

    if (isValidLength && isOnlyLettersDigits && isAtLeastTwoDigits) {
        console.log("Password is valid");
    }

}

passwordValidator('Pa$s$s')