function secretChat(input) {
    let message = input.shift();
    let command = input.shift();

    while (command != `Reveal`) {
        let tokens = command.split(`:|:`);
        let operation = tokens.shift();

        if (operation == `InsertSpace`) {
            let index = Number(tokens[0]);
            let fistHalf = message.slice(0, index);
            let secondHalf = message.slice(index);
            message = fistHalf + ` ` + secondHalf;

            console.log(message);

        } else if (operation == `Reverse`) {
            let substring = tokens[0];

            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index + substring.length);
                
                message = firstHalf + secondHalf + substring.split(``).reverse().join(``);

                console.log(message);

            } else {
                console.log(`error`);
            }

        } else if (operation == `ChangeAll`) {
            let [substring, replacement] = tokens;
            let parts = message.split(substring);
            message = parts.join(replacement)

            console.log(message);
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )
  
  