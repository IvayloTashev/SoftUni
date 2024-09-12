function attachEventsListeners() {

    let convertButtons = Array.from(document.querySelectorAll(`input[type="button"]`));

    for (let button of convertButtons) {
        button.addEventListener(`click`, onClickHandler)
    }

    function onClickHandler(event) {
        let inputTextBox = event.target.parentElement.querySelector(`input[type="text"]`);
        let unit = inputTextBox.id
        let inputValue = inputTextBox.value;

        if (unit == "days") {
            document.getElementById(`days`).value = inputValue;
            document.getElementById(`hours`).value = inputValue * 24;
            document.getElementById(`minutes`).value = inputValue * 24 * 60;
            document.getElementById(`seconds`).value = inputValue * 24 * 60 * 60;

        } else if (unit == "hours") {
            document.getElementById(`days`).value = inputValue / 24;
            document.getElementById(`hours`).value = inputValue;
            document.getElementById(`minutes`).value = inputValue * 60;
            document.getElementById(`seconds`).value = inputValue * 60 * 60;

        } else if (unit == "minutes") {
            document.getElementById(`days`).value = inputValue / 60 / 24;
            document.getElementById(`hours`).value = inputValue / 60;
            document.getElementById(`minutes`).value = inputValue;
            document.getElementById(`seconds`).value = inputValue * 60;

        } else if (unit == "seconds") {
            document.getElementById(`days`).value = inputValue /60 / 60 / 24;
            document.getElementById(`hours`).value = inputValue / 60 / 60;
            document.getElementById(`minutes`).value = inputValue / 60;
            document.getElementById(`seconds`).value = inputValue;
        }

    }

}