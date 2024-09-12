import { getAllShoes } from "../data/shoes.js";
import { html, render, page } from "../lib.js";

const dashboardTemp = (shoesData) => html`
<section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoesData.length ? shoesData.map(shoe => shoeTemp(shoe)) : null}
          </ul>
            <!-- Display an h2 if there are no posts -->
            ${!shoesData.length ? html`<h2>There are no items added yet.</h2>` : null}
        </section>
`;

const shoeTemp = (shoe) => html `
    <li class="card">
        <img src=${shoe.imageUrl} alt="travis" />
        <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
        <strong>Model: </strong
        ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        <a class="details-btn" href="/details/${shoe._id}">Details</a>
    </li>
`;


export async function showDashboard(ctx) {
    const shoesData = await getAllShoes();
    render(dashboardTemp(shoesData));
};