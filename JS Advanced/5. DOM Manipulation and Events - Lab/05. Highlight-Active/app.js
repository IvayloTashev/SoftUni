function focused() {
    let inputBoxes = document.querySelectorAll(`input`);

    for (let inputBox of inputBoxes) {
        inputBox.addEventListener(`focus`, focus);
        inputBox.addEventListener(`blur`, blur);
    }

    function focus(event) {
        let currbox = event.target.parentElement;
        currbox.classList.add(`focused`);
    }

    function blur(event) {
        let currbox = event.target.parentElement;
        currbox.classList.remove(`focused`);
    }

}

