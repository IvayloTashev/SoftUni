function passwordValidator(input) {

    let password = input.shift();

    let command = input.shift();

    while (command != "Complete") {

        let tokens = command.split(` `);
        let operation = tokens.shift();

        if (operation == "Make") {
            UppOrLow = tokens.shift();
            operation += ` ${UppOrLow}`;
        }

        if (operation == "Insert") {
            let index = Number(tokens.shift());
            let char = tokens.shift();

            if (index >= 0 && index < password.length) {
                changedPassword = password.split(``);
                changedPassword.splice(index, 0, char);
                password = changedPassword.join(``);

                console.log(password);
            }

        } else if (operation == "Replace") {
            let char = tokens.shift();
            let value = Number(tokens.shift());

            if (password.includes(char)) {
                let code = char.charCodeAt();
                let newValue = code + value;
                let newChar = String.fromCharCode(newValue)

                let parts = password.split(char);
                password = parts.join(newChar);

                console.log(password);
            }

        } else if (operation == "Make Upper") {
            let index = Number(tokens.shift());

            let changedPassword = password.split(``);
            charToUppCase = changedPassword[index].toUpperCase();

            changedPassword.splice(index, 1, charToUppCase);
            password = changedPassword.join(``);

            console.log(password);

        } else if (operation == "Make Lower") {
            let index = Number(tokens.shift());

            let changedPassword = password.split(``);
            charToLowCase = changedPassword[index].toLowerCase();

            changedPassword.splice(index, 1, charToLowCase);
            password = changedPassword.join(``);

            console.log(password);

        } else if (operation == "Validation") {

            if (password.length < 8) {
                console.log(`Password must be at least 8 characters long!`);
            }

            for (let char of password) {
                code = char.charCodeAt();

                if (!((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code == 95))) {
                    console.log(`Password must consist only of letters, digits and _!`);
                    break;
                }

            }

            matchUpper = password.match(/[A-Z]/g);

            if (matchUpper == null) {
                console.log(`Password must consist at least one uppercase letter!`);
            }

            matchLower = password.match(/[a-z]/g);

            if (matchLower == null) {
                console.log(`Password must consist at least one lowercase letter!`);
            }

            matchDigit = password.match(/[0-9]/g);

            if (matchDigit == null) {
                console.log(`Password must consist at least one digit!`);
            }

        }

        command = input.shift();
    }

}

// passwordValidator([
//     'invalidpassword*',
//     'Add 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete'])

passwordValidator([
    '123456789',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete']) 