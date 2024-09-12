import { getProductById } from "../data/products.js";
import { getUserData } from "../data/util.js";
import { html, render } from "../lib.js";

const detailsTemplate = (productData, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src=${productData.imageUrl} alt="example1" />
            <p id="details-title">${productData.item}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">Price: €${productData.price}</p>
                <p class="details-availability">${productData.availability}</p>
                <p class="type">Type: ${productData.type}</p>
                <p id="item-description">${productData.description}</p>
            </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${productData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${productData._id}" id="delete-btn">Delete</a>
            </div>` : ""}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const productData = await getProductById(id);

    const user = getUserData();
    const isOwner = user && user._id == productData._ownerId;

    render(detailsTemplate(productData, isOwner));
};

