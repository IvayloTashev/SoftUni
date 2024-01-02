function validatePIN(pin) {
    
    isValid = true;

    if (pin.length != 4 && pin.length != 6) {
        isValid = false;
        return isValid

    } else {
        for (let char of pin) {

            let code = char.charCodeAt();
    
            if (!(code >= 48 && code <= 57)) {
                isValid = false;
                return isValid
            }
        }
    }

    return isValid;

}

validatePIN("1")
// validatePIN("12345")
// validatePIN("a234")

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/