function attachEvents() {
    const createBtnRef = document.getElementById(`btnCreate`);
    const loadBtnRef = document.getElementById(`btnLoad`);
    createBtnRef.addEventListener(`click`, onCreate);
    loadBtnRef.addEventListener(`click`, onLoad);
    const personRef = document.getElementById(`person`);
    const phoneRef = document.getElementById(`phone`);
    const phonebookUlRef = document.getElementById(`phonebook`);

    const URL = {
        getAndPost: `http://localhost:3030/jsonstore/phonebook`,
        del: `http://localhost:3030/jsonstore/phonebook/`
    }

    async function onCreate(event) {
        let person = personRef.value;
        let phone = phoneRef.value;

        if (!person || !phone) {
            return;
        }

        let data = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ person, phone })
        };

        await fetch(URL.getAndPost, data);

        personRef.value = "";
        phoneRef.value = "";
        onLoad();
    }

    async function onLoad(event) {
        let response = await fetch(URL.getAndPost);
        let data = await response.json();
        phonebookUlRef.innerHTML = "";

        for (let person of Object.values(data)) {
            let li = document.createElement(`li`);
            li.textContent = `${person.person}: ${person.phone}`;
            let deleteBtn = document.createElement(`button`);
            deleteBtn.textContent = `Delete`
            deleteBtn.dataset.id = person._id;
            deleteBtn.addEventListener(`click`, onDelete);
            li.appendChild(deleteBtn);
            phonebookUlRef.appendChild(li);
        }
    }

    async function onDelete(event) {
        let id = event.target.dataset.id;
        await fetch(URL.del + id, { method: "DELETE" });
        onLoad();
    }
}

attachEvents();