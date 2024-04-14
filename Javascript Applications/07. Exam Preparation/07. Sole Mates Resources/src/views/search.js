import { searchShoe } from "../data/shoes.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const searchTemp = (searchData) => html`
    <section id="search">
        <h2>Search by Brand</h2>
        <form class="search-wrapper cf" @submit=${onSearch}>
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
        </form>

        <h3>Results:</h3>

        <div id="search-container">
            <ul class="card-wrapper">
                <!-- Display a li with information about every post (if any)-->
                ${searchData.length ? searchData.map(shoe => liTemp(shoe, user)) : html`<h2>There are no results found.</h2>`}
            </ul>
            <!-- Display an h2 if there are no posts -->
          </div>
    </section>
`;

const liTemp = (shoe, user) => html `
    <li class="card">
        <img src=${shoe.imageUrl} alt="travis" />
        <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        ${user ? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>` : null}
    </li>
`;

let searchData = [];
let user = null;
export function showSearch(ctx) {
    render(searchTemp(searchData))
}

async function onSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {search} = Object.fromEntries(formData);

    user = await getUserData();

    if (!search) {
        return alert("Fill the textbox")
    }

    searchData = await searchShoe(search);
    page.redirect("/search")
}
