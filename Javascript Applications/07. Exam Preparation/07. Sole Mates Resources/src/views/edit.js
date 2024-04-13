import { getShoeById, updateShoe } from "../data/shoes.js";
import { html, render, page } from "../lib.js";

const editTemp = (shoesData) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoesData.brand} />
                <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoesData.model} />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoesData.imageUrl} />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoesData.release} />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoesData.designer} />
                <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoesData.value} />
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

let context = null
export async function showEdit(ctx) {
    context = ctx;
    const id = context.params.id;
    const shoesData = await getShoeById(id);
    render(editTemp(shoesData));
}

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const {brand, model, imageUrl, release, designer, value} = Object.fromEntries(formData);

    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert("All fields are required")
    }

    await updateShoe(id, brand, model, imageUrl, release, designer, value);

    page.redirect(`/details/${id}`)
}

