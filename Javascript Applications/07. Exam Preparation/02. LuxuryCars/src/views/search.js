import { html, render, page } from "../lib.js";

const searchTemplate = (cars) => html`
<!-- Search page -->
<section id="search">
    <div class="form">
        <h4>Search</h4>
        <form class="search-form">
            <input type="text" name="search" id="search-input" />
            <button class="button-list" @click=${onSearch}>Search</button>
        </form>
    </div>
        <div class="search-result">
            ${cars.length ? cars.map(car => carTemplate(car)) : html`<h2 class="no-avaliable">No result.</h2>`}
    </div>
</section>`;

const carTemplate = (car) => html`
<div class="car">
    <img src=${car.imageUrl} alt="example1"/>
    <h3 class="model">${car.model}</h3>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
</div>
`;

export function showSearchView() {
    const cars = [];
    render(searchTemplate(cars));
};

async function onSearch(event) {
    event.preventDefault();

    const query = document.getElementById("search-input").value;
    const url = `http://localhost:3030/data/cars?where=model%20LIKE%20%22${query}%22`

    if (!query) {
        return alert("Invalid")
    }

    let response = await fetch(url);
    let cars = await response.json()

    render(searchTemplate(cars));
}