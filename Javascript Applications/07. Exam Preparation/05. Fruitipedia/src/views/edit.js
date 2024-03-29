import { getFruitById, updateFruit } from "../data/fruits.js";
import { html, render, page } from "../lib.js";

const editTemplate = (fruitData) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${fruitData.name} />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value=${fruitData.imageUrl} />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50" .value=${fruitData.description} ></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50" .value=${fruitData.nutrition} ></textarea>
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

let context = null;
export async function editView(ctx) {
    context = ctx;
    const id = context.params.id;
    const fruitData = await getFruitById(id);
    render(editTemplate(fruitData))
};

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

    if (!name || !imageUrl || !description || !nutrition) {
        return alert("Update error")
    };

    await updateFruit(id, name, imageUrl, description, nutrition);
    page.redirect("/details/" + id);
}

