import { getAllProducts } from "../data/products.js";
import { html, render } from "../lib.js";

const marketTemplate = (productsData) => html`
<h3 class="heading">Market</h3>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${productsData.length ? productsData.map(p => productTemplate(p)) : html`<h3 class="empty">No Items Yet</h3>`}
    </section>`;

const productTemplate = (p) => html`
<div class="item">
    <img src=${p.imageUrl} alt="example1" />
    <h3 class="model">${p.item}</h3>
    <div class="item-info">
        <p class="price">Price: €${p.price}</p>
        <p class="availability">${p.availability}</p>
        <p class="type">Type: ${p.type}</p>
    </div>
    <a class="details-btn" href="/details/${p._id}">Uncover More</a>
</div>
`;

export async function showMarket(ctx) {
    const productsData = await getAllProducts();
    render(marketTemplate(productsData));
};


