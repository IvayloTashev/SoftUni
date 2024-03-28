import { getFactById } from "../data/facts.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemp = (factData, ownerId) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${factData.imageUrl} alt="example1" />
        <p id="details-category">${factData.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${factData.description}</p>
                <p id ="more-info">${factData.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">0</span></h3>

            ${ownerId == factData._ownerId ? html`
            <div id="action-buttons">
                <a href="/edit/${factData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${factData._id}" id="delete-btn">Delete</a>

                <a href="" id="like-btn">Like</a>
            </div>` : ""}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const  ownerId = getUserData()?._id;
    const factData = await getFactById(id);
    render(detailsTemp(factData, ownerId))
}