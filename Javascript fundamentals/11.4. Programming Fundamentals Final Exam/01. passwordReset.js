function passwordReset(input) {

    let password = input.shift();
    let command = input.shift();

    while (command != `Done`) {
        let tokens = command.split(` `);
        let operation = tokens.shift();

        if (operation == `TakeOdd`) {
            let buffer = ``;

            for (let i = 0; i < password.length; i++) {
                if (i % 2 != 0) {
                    buffer += password[i];
                }
            }
            password = buffer;

            console.log(password);

        }   else if (operation == `Cut`) {
            let index = Number(tokens.shift());
            let length = Number(tokens.shift());
            let firstHalf = password.slice(0, index);
            let secondHalf = password.slice(index + length);
            password = firstHalf + secondHalf;

            console.log(password);

        } else if (operation == `Substitute`) {
            let [substring, replacer] = tokens;

            if (password.includes(substring)) {
                let parts = password.split(substring);
                password = parts.join(replacer);
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }

        }

        command = input.shift();
    }

    console.log(`Your password is: ${password}`);

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

    console.log(`--------`);

    passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
    



