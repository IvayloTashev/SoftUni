import { createAlbum } from "../data/music.js";
import { html, render, page } from "../lib.js";

const createTemp = () => html`
    <section id="create">
        <div class="form">
            <h2>Add Album</h2>
            <form class="create-form" @submit=${onCreate}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                <input type="text" name="album" id="album-album" placeholder="Album" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                <input type="text" name="release" id="album-release" placeholder="Release date" />
                <input type="text" name="label" id="album-label" placeholder="Label" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" />
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
    const {singer, album, imageUrl, release, label, sales} = Object.fromEntries(formData);

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert("Create error")
    }

    await createAlbum(singer, album, imageUrl, release, label, sales);
    page.redirect("/dashboard")
};


