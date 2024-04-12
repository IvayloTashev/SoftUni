import { getShoeById } from "../data/shoes.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemp = (shoesData, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">${shoesData.title}</p>
            <div id="img-wrapper">
                <img src=${shoesData.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${shoesData.brand}</span></p>
                <p>
                    Model: <span id="details-model">${shoesData.model}</span>
                </p>
                <p>Release date: <span id="details-release">${shoesData.release}</span></p>
                <p>Designer: <span id="details-designer">${shoesData.designer}</span></p>
                <p>Value: <span id="details-value">${shoesData.value}</span></p>
            </div>
            ${isOwner ? html `
            <div id="action-buttons">
              <a href="/edit/${shoesData._id}" id="edit-btn">Edit</a>
              <a href="/delete/${shoesData._id}" id="delete-btn">Delete</a>
            </div>` : null}
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const shoesData = await getShoeById(id);
    const user = getUserData();
    const isOwner = !!user && user._id == shoesData._ownerId;
    render(detailsTemp(shoesData, isOwner));
};

