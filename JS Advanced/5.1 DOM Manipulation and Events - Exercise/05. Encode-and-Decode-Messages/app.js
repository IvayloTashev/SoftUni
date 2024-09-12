function encodeAndDecodeMessages() {

    let [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll(`button`));
    let [encodeTextBox, decodeTextBox] = document.querySelectorAll(`textarea`);

    encodeBtn.addEventListener(`click`, encode);
    decodeBtn.addEventListener(`click`, decode);

    function encode(event) {
        let message = encodeTextBox.value.split(``);

        let result = ``;

        for (let char of message) {
            let currCode = char.charCodeAt();
            let newCode = currCode + 1;
            let newChar = String.fromCharCode(newCode);
            result += newChar;
        }

        decodeTextBox.value = result;
        encodeTextBox.value = ``;
    }

    function decode(event) {
        let message = decodeTextBox.value.split(``);

        let result = ``;

        for (let char of message) {
            let currCode = char.charCodeAt();
            let newCode = currCode - 1;
            let newChar = String.fromCharCode(newCode);
            result += newChar;
        }

        decodeTextBox.value = result;

    }

    decodeTextBox.value = ``;

}

//The password for my bank account is 123pass321