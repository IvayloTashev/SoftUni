import { html, render } from "./node_modules/lit-html/lit-html.js"

const root = document.getElementById("root");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let towns = formData.get("towns").split(`, `);
    render(listTown(towns), root);
}

function listTown(towns) {
    let ul = html `
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `
    return ul;
}