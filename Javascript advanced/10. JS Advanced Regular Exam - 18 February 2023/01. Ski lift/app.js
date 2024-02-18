window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector(`form`);
    formRef.addEventListener(`submit`, onSubmit);
    const firstNameRef = document.getElementById(`first-name`);
    const lastNameRef = document.getElementById(`last-name`);
    const peopleCountRef = document.getElementById(`people-count`);
    const fromDateRef = document.getElementById(`from-date`);
    const daysCountRef = document.getElementById(`days-count`);
    const infoTicketUl = document.querySelector(`#info-ticket ul`);
    const nextBtnRef = document.getElementById(`next-btn`);
    const confirmTicketUl = document.querySelector(`#confirm-ticket-section ul`);
    const divMainRef = document.getElementById(`main`);
    const bodyRef = document.getElementById(`body`);
    let divElement = null;

    function onSubmit(event) {
        event.preventDefault()
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let peopleCount = peopleCountRef.value;
        let fromDate = fromDateRef.value;
        let daysCount = daysCountRef.value;

        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
        }

        let li = document.createElement(`li`);
        let article = createActicle(firstName, lastName, peopleCount, fromDate, daysCount);
        li.innerHTML = article;
        infoTicketUl.appendChild(li);

        let editBtn = li.children[1];
        let continueBtn = li.children[2];
        editBtn.addEventListener(`click`, onEdit);
        continueBtn.addEventListener(`click`, onContinue);
        formRef.reset()
        buttonToggle();
    }

    function createActicle(firstName, lastName, peopleCount, fromDate, daysCount) {
        let result = `<article>\n`;
        result += `<h3>Name: ${firstName} ${lastName}</h3>\n`;
        result += `<p>From date: ${fromDate}</p>\n`;
        result += `<p>For ${daysCount} days</p>\n`;
        result += `<p>For ${peopleCount} people</p>\n`;
        result += `</article>`;
        let editBtn = createButton("edit-btn", "Edit");
        let continueBtn = createButton("continue-btn", "Continue");
        result += editBtn;
        result += continueBtn;
        return result;
    }

    function onEdit(event) {
        let liElement = event.target.parentElement;
        let infoFromForm = Array.from(liElement.children[0].children);

        let NamesArr = infoFromForm[0].textContent.split(` `);
        let peopleCountArr = infoFromForm[3].textContent.split(` `);
        let fromDateArr = infoFromForm[1].textContent.split(` `);
        let daysCountArr = infoFromForm[2].textContent.split(` `);

        firstNameRef.value = NamesArr[1];
        lastNameRef.value = NamesArr[2];
        peopleCountRef.value = peopleCountArr[1];
        fromDateRef.value = fromDateArr[2];
        daysCountRef.value = daysCountArr[1];

        liElement.remove();
        buttonToggle();
    }

    function onContinue(event) {
        let liElement = event.target.parentElement;
        confirmTicketUl.appendChild(liElement);
        liElement.children[1].remove();
        liElement.children[1].remove();

        let confirmBtn = createButton("confirm-btn", "Confirm");
        liElement.innerHTML += confirmBtn;

        let cancelBtn = createButton("cancel-btn", "Cancel");
        liElement.innerHTML += cancelBtn;

        liElement.children[1].addEventListener(`click`, onConfirm);
        liElement.children[2].addEventListener(`click`, onCancel);
    }

    function onConfirm(event) {
        event.target.parentElement.remove();
        divElement = divMainRef;
        divMainRef.remove();

        let h1Element = document.createElement(`h1`);
        h1Element.classList.add(`thank-you`);
        h1Element.textContent = `Thank you, have a nice day!`;
        bodyRef.appendChild(h1Element);

        let backBtn = document.createElement(`button`);
        backBtn.classList.add(`back-btn`);
        backBtn.textContent = `Back`;
        bodyRef.appendChild(backBtn);
        backBtn.addEventListener(`click`, onBack);
    }

    function onBack(event) {
        event.target.parentElement.children[3].remove;
        event.target.parentElement.children[2].remove;
        bodyRef.appendChild(divElement);
        buttonToggle();
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        buttonToggle();
    }

    function buttonToggle() {
        if (nextBtnRef.disabled == false) {
            nextBtnRef.disabled = true;
        } else {
            nextBtnRef.disabled = false;
        }
    }

    function createButton(classes, text) {
        return `<button class="${classes}">${text}</button>`
    }

}




