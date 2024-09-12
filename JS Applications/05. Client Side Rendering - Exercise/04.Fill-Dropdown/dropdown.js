import { html, render } from "./node_modules/lit-html/lit-html.js";
const root = document.getElementById("menu");
const inputText = document.getElementById("itemText");
document.querySelector('input[type="submit"]').addEventListener("click", onAdd)
const url = `http://localhost:3030/jsonstore/advanced/dropdown`;

let optionTemp = (town) => html`<option value=${town._id}>${town.text}</option>`

function update(data) {
    let result = Object.values(data).map(town => optionTemp(town))
    render(result, root);
}

async function addItem() {
    let response = await fetch(url);
    let data = await response.json();
    update(data)
}

async function onAdd(event) {
    event.preventDefault()
    let text = inputText.value;

    await addTownInDB(text)
    inputText.value = "";
    addItem()
}

async function addTownInDB(text) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text})
    });
}

addItem()


