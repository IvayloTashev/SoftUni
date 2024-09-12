import { getCharById, updateChar } from "../data/chars.js";
import { html, render, page } from "../lib.js";

const editTemp = (charData) => html`
<section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Edit Character</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="category" id="category" placeholder="Character Type" .value=${charData.category} />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${charData.imageUrl} />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${charData.description} ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10" .value=${charData.moreInfo} ></textarea>
            <button type="submit">Edit</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
    </div>
</section>
`;

let context = null;
export async function showEditView(ctx) {
    context = ctx;
    const id = context.params.id;
    const charData = await getCharById(id);
    render(editTemp(charData));
}

async function onEdit(event) {
    event.preventDefault();

    const id = context.params.id;

    const formData = new FormData(event.target);
    const { category, "image-url": imageUrl, description, "additional-info": moreInfo } = Object.fromEntries(formData);

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert("All fields are required");
    }

    await updateChar(id, category, imageUrl, description, moreInfo);
    page.redirect(`/details/${id}`);
}