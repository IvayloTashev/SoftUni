import { getCharById } from "../data/chars.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemp = (charData, ownerId) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${charData.imageUrl} alt="example1" />
        <div>
            <p id="details-category">${charData.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${charData.description}</p>
                    <p id ="more-info">${charData.moreInfo}</p>
                </div>
            </div>
            <h3>Is This Useful:<span id="likes">0</span></h3>
            <!-- TODO BONUS -->
            ${ownerId == charData._ownerId ? html`
                <div id="action-buttons">
                    <a href="/edit/${charData._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${charData._id}" id="delete-btn">Delete</a>
            
                    <a href="/like/${charData._id}" id="like-btn">Like</a>
                </div>` : ""}
        </div>
    </div>
</section>`;

export async function showDetailsVeiw(ctx) {
    const id = ctx.params.id;
    const charData = await getCharById(id);

    const ownerId = getUserData()?._id;

    render(detailsTemp(charData, ownerId));
}