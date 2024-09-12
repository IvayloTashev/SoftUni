import { search } from "../data/fruits.js";
import { html, render, page } from "../lib.js";

const searchTemplate = (fruitData) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${onSearch}>
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${fruitData.length ? fruitData.map(fruit => fruitTemplate(fruit)) : html`<p class="no-result">No result.</p>`}
    </div>
</section>`;

const fruitTemplate = (fruit) => html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>
`;


export function showSearch(ctx) {
    const fruitData = [];
    render(searchTemplate(fruitData))
}

async function onSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get("search");

    if (!query) {
        return alert("fill the search box")
    }

    const fruitData = await search(query);
    render(searchTemplate(fruitData))
}