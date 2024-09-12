window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector(`form`);
    formRef.addEventListener(`submit`, onSubmit);
    const nameRef = document.getElementById(`name`);
    const emailRef = document.getElementById(`email`);
    const contactRef = document.getElementById(`contact-number`);
    const classTypeRef = document.getElementById(`class-type`);
    const timeRef = document.getElementById(`class-time`);
    const nextBtnRef = document.getElementById(`next-btn`);
    const previewSectionUl = document.querySelector(`#preview-section ul`);
    const confirmSectionUl = document.querySelector(`.confirm-class`);
    const divMainRef = document.getElementById(`main`);
    const bodyRef = document.getElementById(`body`);

    function onSubmit(event) {
        event.preventDefault();

        let name = nameRef.value;
        let email = emailRef.value;
        let contact = contactRef.value;
        let classType = classTypeRef.value;
        let time = timeRef.value;

        if (!name || !email || !contact || !classType || !time) {
            return;
        }

        let li = document.createElement(`li`);
        li.classList.add(`info-item`);
        li.innerHTML += createArticle(name, email, contact, classType, time);
        li.children[1].addEventListener(`click`, onEdit);
        li.children[2].addEventListener(`click`, onContinue);
        previewSectionUl.appendChild(li);

        formRef.reset();
        nextBtnToggle();
    }

    function onEdit(event) {
        let li = event.target.parentElement;
        let inputInfo = event.target.parentElement.querySelectorAll(`p`); 

        let name = inputInfo[0].textContent;
        let email = inputInfo[1].textContent;
        let contact = inputInfo[2].textContent;
        let classType = inputInfo[3].textContent;
        let time = inputInfo[4].textContent;

        nameRef.value = name;
        emailRef.value = email;
        contactRef.value = contact;
        classTypeRef.value = classType;
        timeRef.value = time;

        li.remove();
        nextBtnToggle();
    }

    function onContinue(event) {
        let li = event.target.parentElement;
        li.children[2].remove();
        li.children[1].remove();

        li.innerHTML += createButton("cancel-btn", "Cancel");
        li.innerHTML += createButton("confirm-btn", "Confirm");
        li.children[1].addEventListener(`click`, onCancel);
        li.children[2].addEventListener(`click`, onConfirm);

        confirmSectionUl.appendChild(li);
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        nextBtnToggle();
    }    
    
    function onConfirm(event) {
        divMainRef.remove();

        let h1 = document.createElement(`h1`);
        h1.setAttribute(`id`, `thank-you`);
        h1.textContent = `Thank you for scheduling your appointment, we look forward to seeing you!`;
        bodyRef.appendChild(h1);

        let doneBtn = document.createElement(`button`);
        doneBtn.setAttribute(`id`, `done-btn`);
        doneBtn.textContent = `Done`;
        doneBtn.addEventListener(`click`, onDone);
        bodyRef.appendChild(doneBtn);

    }

    function onDone(event) {
   
    }

    function createArticle(name, email, contact, classType, time) {
        let result = `<article class="personal-info">`;
        result += `<p>${name}</p>\n`;
        result += `<p>${email}</p>\n`;
        result += `<p>${contact}</p>\n`;
        result += `<p>${classType}</p>\n`;
        result += `<p>${time}</p>\n`;
        result += `</article>`;
        result += createButton("edit-btn", "Edit");
        result += createButton("continue-btn", "Continue");
        return result;
    }

    function createButton(classes, text) {
        return `<button class="${classes}">${text}</button>`;
    }

    function nextBtnToggle() {
        if (nextBtnRef.disabled == false) {
            nextBtnRef.disabled = true;
        } else {
            nextBtnRef.disabled = false;
        }
    }
}




