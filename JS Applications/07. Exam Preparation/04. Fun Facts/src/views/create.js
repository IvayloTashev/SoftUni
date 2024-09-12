import { createFact } from "../data/facts.js";
import { html, render, page } from "../lib.js";

const createTemp = () => html`
<section id="create">
    <div class="form">
        <h2>Add Fact</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="category" id="category" placeholder="Category" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50" ></textarea>
            <button type="submit">Add Fact</button>
        </form>
    </div>
</section>
`;

export function showCreate(ctx) {
    render(createTemp());
};

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { category, "image-url": imageUrl, description, "additional-info": moreInfo } = Object.fromEntries(formData);

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert("All fields are required")
    }

    await createFact(category, imageUrl, description, moreInfo);
    page.redirect("/dashboard")
}