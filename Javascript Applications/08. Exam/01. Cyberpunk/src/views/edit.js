import { getProductById, updateProduct } from "../data/products.js";
import { notification } from "../data/notifications.js";
import { html, render, page } from "../lib.js";

const editTemplate = (productData) => html`
<section id="edit">
    <div class="form form-item">
        <h2>Edit Your Item</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="item" id="item" placeholder="Item" .value=${productData.item} />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" .value=${productData.imageUrl} />
            <input type="text" name="price" id="price" placeholder="Price in Euro" .value=${productData.price} />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" .value=${productData.availability} />
            <input type="text" name="type" id="type" placeholder="Item Type" .value=${productData.type} />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50" .value=${productData.description} ></textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = context.params.id;

    const productData = await getProductById(id);
    render(editTemplate(productData));
};

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const {item, imageUrl, price, availability, type, description} = Object.fromEntries(formData);

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        return notification("All fields are required")
    }

    await updateProduct(id, item, imageUrl, price, availability, type, description);
    page.redirect(`/details/${id}`)
}