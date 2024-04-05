import { getAllAlbums } from "../data/music.js";
import { html, render } from "../lib.js";

const dashboardTemp = (albumsData) => html`
<section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
            ${albumsData.length ? albumsData.map(a => albumTemp(a)) : ""}

        </ul>
            ${!albumsData.length ? html`<h2>There are no albums added yet.</h2>` : ""}

      </section>
`;

const albumTemp = (a) => html`
    <li class="card">
        <img src=${a.imageUrl} alt="travis" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${a.singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${a.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${a.sales}</span></p>
        <a class="details-btn" href="/details/${a._id}">Details</a>
    </li>
`;

export async function showDashboard(ctx) {
    const albumsData = await getAllAlbums();
    render(dashboardTemp(albumsData));
}