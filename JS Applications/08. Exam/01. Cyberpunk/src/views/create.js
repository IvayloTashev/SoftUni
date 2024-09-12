import { createProduct } from "../data/products.js";
import { notification } from "../data/notifications.js";
import { html, render, page } from "../lib.js";

const createTemplate = () => html`
<section id="create">
    <div class="form form-item">
        <h2>Share Your item</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="item" id="item" placeholder="Item" />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50" ></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

export function showCreate(ctx) {
    render(createTemplate());
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {item, imageUrl, price, availability, type, description} = Object.fromEntries(formData);

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        return notification("All fields are required")
    }

    await createProduct(item, imageUrl, price, availability, type, description);
    page.redirect("/market")
}

