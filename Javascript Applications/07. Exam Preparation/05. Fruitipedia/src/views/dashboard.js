import { getAllFruits } from "../data/fruits.js";
import { html, render, page } from "../lib.js";

const dashboardTemplate = (fruitData) => html`
<h2>Fruits</h2>
    <section id="dashboard">
        ${fruitData.length ? fruitData.map(fruit => fruitTemplate(fruit)) : null}
    </section>
        ${!fruitData.length ? html`<h2>No fruit info yet.</h2>` : null}
`;

const fruitTemplate = (fruit) => html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>
`;

export async function dashboardVeiw(ctx) {
    const fruitData = await getAllFruits();
    render(dashboardTemplate(fruitData));
};