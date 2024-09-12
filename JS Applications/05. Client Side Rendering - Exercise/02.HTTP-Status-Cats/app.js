import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");

render(ulWrapper(cats), root)

function ulWrapper(cats) {
    let ul = html`
    <ul>
        ${cats.map(cat => listingCats(cat))}
    </ul>
    `
    return ul;
}

function listingCats(cat) {
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${btnToggle}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `
}

function btnToggle(event) {
    let btn = event.target
    let div = event.target.parentElement.querySelector("div")
    if (div.style.display == "none") {
        btn.textContent = "Hide status code"
        div.style.display = "block";
    } else {
        btn.textContent = "Show status code"
        div.style.display = "none"
    }
}
