import { updateFact, getFactById} from "../data/facts.js";
import { html, render, page } from "../lib.js";

const editTemp = (factData) => html `
<section id="edit">
    <div class="form">
        <h2>Edit Fact</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="category" id="category" placeholder="Category" .value=${factData.category} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${factData.imageUrl} />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value=${factData.description} ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50" .value=${factData.moreInfo} ></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</section>`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = context.params.id;
    const factData = await getFactById(id);
    render(editTemp(factData));
};

async function onEdit(event) {
    event.preventDefault();

    const id = context.params.id;

    const formData = new FormData(event.target);
    const { category, "image-url": imageUrl, description, "additional-info": moreInfo } = Object.fromEntries(formData);

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert("All fields are required")
    }

    await updateFact(id, category, imageUrl, description, moreInfo);
    page.redirect(`/details/${id}`)
}
