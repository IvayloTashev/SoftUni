import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"

document.querySelector("button").addEventListener("click", onClick);

const townRoot = document.getElementById("towns");
const resultRoot = document.getElementById("result");
const inputRef = document.getElementById("searchText")

update();

function update(match) {
   render(UlTemp(towns, match), townRoot);
}

function UlTemp(towns, match) {
   return html`<ul>${towns.map(town => liTemp(town, match?.includes(town)))}</ul>`
}

function liTemp(town, isActive) {
   return html`<li class=${isActive ? "active" : "" }>${town}</li>`
}

function onClick() {
   let text = inputRef.value;
   let match = towns.filter(town => town.includes(text));
   update(match);
   renderMatchCounter(match.length);
}

function renderMatchCounter(count) {
   render(html`${count} matches found`, resultRoot);
}


