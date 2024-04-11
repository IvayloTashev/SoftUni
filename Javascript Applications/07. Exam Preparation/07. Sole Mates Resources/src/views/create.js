import { createShoe } from "../data/shoes.js";
import { html, render, page } from "../lib.js";

const createTemp = () => html`
 <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form class="create-form" @submit=${onCreate}>
              <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
              <input type="text" name="model" id="shoe-model" placeholder="Model" />
              <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
              <input type="text" name="release" id="shoe-release" placeholder="Release date" />
              <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
              <input type="text" name="value" id="shoe-value" placeholder="Value" />
              <button type="submit">post</button>
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
    const {brand, model, imageUrl, release, designer, value} = Object.fromEntries(formData);

    if (!brand || !model || !imageUrl || !release || !designer || !value) {
        return alert("All fields are required")
    };

    await createShoe(brand, model, imageUrl, release, designer, value);
    page.redirect("/dashboard")
}