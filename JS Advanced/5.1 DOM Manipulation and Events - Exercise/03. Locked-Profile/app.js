function lockedProfile() {

    let showMoreBtns = Array.from(document.querySelectorAll(`button`));

    for (let btn of showMoreBtns) {
        btn.addEventListener(`click`, onClickHandler);

    }

    function onClickHandler(event) {
        let hidenInfo = event.target.parentElement.querySelector(`div`);
        let checkBoxes = event.target.parentElement.querySelector(`input[type="radio"]:checked`);

        if (checkBoxes.value == "unlock") {
            if (event.target.textContent == `Show more`) {
                hidenInfo.style.display = `block`;
                event.target.textContent = `Hide it`
            } else {
                hidenInfo.style.display = `none`;
                event.target.textContent = `Show more`
            }

        }

    }

}