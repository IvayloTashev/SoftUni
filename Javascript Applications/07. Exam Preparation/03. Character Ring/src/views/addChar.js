import { addChar } from "../data/chars.js";
import { html, render, page } from "../lib.js";

const addCharTemp = () => html`
 <section id="create">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Add Character</h2>
        <form class="create-form" @submit=${onAdd}>
            <input type="text" name="category" id="category" placeholder="Character Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Character</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
    </div>
</section>
`;

export function showAddCharView(ctx) {
    render(addCharTemp());
}

async function onAdd(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { category, "image-url": imageUrl, description, "additional-info": moreInfo } = Object.fromEntries(formData);

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert("All fields are required");
    }

    await addChar(category, imageUrl, description, moreInfo);

    page.redirect("/characters")
}