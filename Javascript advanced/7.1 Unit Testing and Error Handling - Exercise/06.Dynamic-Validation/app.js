function validate() {
    let inputRef = document.getElementById(`email`);
    inputRef.addEventListener(`change`, onChangeHandler);

    let validator = /[a-z]+@[a-z]+\.[a-z]+/g;

    function onChangeHandler(event) {
        inputRef.classList.add(`error`);
        let input = inputRef.value;
        let match = input.match(validator);

        if (match) {
            inputRef.classList.remove(`error`);
        }
    }

}