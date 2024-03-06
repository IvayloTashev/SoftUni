function attachEvents() {
    const URL = `http://localhost:3030/jsonstore/messenger`;
    const sendBtnRef = document.getElementById(`submit`);
    const refreshBtnRef = document.getElementById(`refresh`);
    const inputAutorRef = document.querySelector(`input[name="author"]`);
    const inputContentRef = document.querySelector(`input[name="content"]`);
    const textAreaRef = document.getElementById(`messages`);

    sendBtnRef.addEventListener(`click`, onSubmit);
    refreshBtnRef.addEventListener(`click`, onRefresh);

   async function onSubmit() {
        let author = inputAutorRef.value;
        let content = inputContentRef.value;

        if (!author || !content) {
            return;
        }

        let data = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                author,
                content
            })
        }

        let response = await fetch(URL, data);
        inputAutorRef.value = "";
        inputContentRef.value = "";
        onRefresh();
    }

    async function onRefresh() {

        let response = await fetch(URL);
        let data = await response.json();

        textAreaRef.textContent = "";
  
        for (let comment of Object.values(data)) {
            textAreaRef.value += `${comment.author}: ${comment.content}\n`
        }

        textAreaRef.value = textAreaRef.value.trim();
    }
}

attachEvents();