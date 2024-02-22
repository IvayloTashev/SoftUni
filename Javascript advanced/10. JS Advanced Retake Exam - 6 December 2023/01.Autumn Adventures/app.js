window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector(`#form form`);
    const addBtnRef = document.getElementById(`add-btn`);
    addBtnRef.addEventListener(`click`, onAdd);
    const timeRef = document.getElementById(`time`);
    const dateRef = document.getElementById(`date`);
    const placeRef = document.getElementById(`place`);
    const eventRef = document.getElementById(`event-name`);
    const contactsRef = document.getElementById(`email`);
    const checkListUl = document.getElementById(`check-list`);
    const upComingListUl = document.getElementById(`upcoming-list`);
    const finishedListUl = document.getElementById(`finished-list`);
    const clearBtn = document.getElementById(`clear`);

    function onAdd(event) {
        let timeInfo = timeRef.value;
        let dateInfo = dateRef.value;
        let placeInfo = placeRef.value;
        let eventInfo = eventRef.value;
        let contactsInfo = contactsRef.value;

        if (!timeInfo || !dateInfo || !placeInfo || !eventInfo || !contactsInfo) {
            return;
        }

        let li = document.createElement(`li`);
        li.classList.add(`event-content`)
        let article = createArticle(timeInfo, dateInfo, placeInfo, eventInfo, contactsInfo);
        li.innerHTML = article;
        checkListUl.appendChild(li);

        li.children[1].addEventListener(`click`, onEdit);
        li.children[2].addEventListener(`click`, onContinue);

        formRef.reset()
        addBtnToggle()
    }

    function onEdit(event) {
        let info = event.target.parentElement.children[0];

        let timeAndDateInfo = info.children[0].textContent.split(` `)
        let placeInfo = info.children[1].textContent.split(` `)
        let eventInfo = info.children[2].textContent.split(` `)
        let contactsInfo = info.children[3].textContent.split(` `)

        event.target.parentElement.children[2].remove();
        event.target.parentElement.children[1].remove();
        info.parentElement.remove();

        timeRef.value = timeAndDateInfo[3];
        dateRef.value = timeAndDateInfo[1];
        placeRef.value = placeInfo[1];
        eventRef.value = eventInfo[1]
        contactsRef.value = contactsInfo[1];
        addBtnToggle();
    }

    function onContinue(event) {
        let liElement = event.target.parentElement;
        upComingListUl.appendChild(liElement);
        liElement.children[2].remove();
        liElement.children[1].remove();

        let finishBtn = createButton("finished-btn", "Move to Finished");
        liElement.innerHTML += finishBtn;
        liElement.children[1].addEventListener(`click`, onFinish);

        addBtnToggle();
    }

    function onFinish(event) {
        let liElement = event.target.parentElement;
        finishedListUl.appendChild(liElement);
        liElement.children[1].remove();
        clearBtn.addEventListener("click", onClear);
    }

    function onClear(event) {
        event.target.parentElement.children[1].children[0].remove()
    }

    function createArticle(timeInfo, dateInfo, placeInfo, eventInfo, contactsInfo) {
        let result = `<article>\n`;
        result += `<p>Begins: ${dateInfo} at: ${timeInfo}</p>\n`;
        result += `<p>In: ${placeInfo}</p>\n`;
        result += `<p>Event: ${eventInfo}</p>\n`;
        result += `<p>Contact: ${contactsInfo}</p>\n`;
        result += `</article>`
        result += createButton("edit-btn", "Edit");
        result += createButton("continue-btn", "Continue");
        return result;
    }

    function createButton(classes, text) {
        return `<button class="${classes}">${text}</button>`;
    }

    function addBtnToggle() {
        if (addBtnRef.disabled == false) {
            addBtnRef.disabled = true;
        } else {
            addBtnRef.disabled = false
        }
    }


}




