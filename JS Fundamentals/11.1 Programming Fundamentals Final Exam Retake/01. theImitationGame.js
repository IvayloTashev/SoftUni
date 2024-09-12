function theImitationGame(input) {

    let cryptedMsg = input.shift();

    let command = input.shift();

    while (command != `Decode`) {

        let tokens = command.split(`|`);
        let operation = tokens[0];

        if (operation == `ChangeAll`) {
            let char = tokens[1];
            let replacement = tokens[2]
            let buffer = ``;
            
            for (let element of cryptedMsg) {
                if (element == char) {
                    element = replacement;
                    buffer += element;
                } else {
                    buffer += element;
                }
            }
            cryptedMsg = buffer;

        } else if (operation == `Insert`) {
            let index = Number(tokens[1]);
            let char = tokens[2];
            let splitStartOfMsg = cryptedMsg.slice(0, index);
            let splitEndOfMsg = cryptedMsg.slice(index);
            splitStartOfMsg += char;
            cryptedMsg = splitStartOfMsg + splitEndOfMsg;

        } else if (operation == `Move`) {
            let moveBy = Number(tokens[1]);
            let splitStartOfMsg = cryptedMsg.slice(0, moveBy);
            let splitEndOfMsg = cryptedMsg.slice(moveBy);
            cryptedMsg = splitEndOfMsg + splitStartOfMsg;
        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${cryptedMsg}`);

}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )




