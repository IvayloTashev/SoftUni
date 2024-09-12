import { getAlbumById, updateAlbum } from "../data/music.js";
import { html, render, page } from "../lib.js";

const editTemp = (albumData) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${albumData.singer} />
                <input type="text" name="album" id="album-album" placeholder="Album" .value=${albumData.album} />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${albumData.imageUrl} />
                <input type="text" name="release" id="album-release" placeholder="Release date" .value=${albumData.release} />
                <input type="text" name="label" id="album-label" placeholder="Label" .value=${albumData.label} />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${albumData.sales} />
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = context.params.id;
    const albumData = await getAlbumById(id);
    render(editTemp(albumData));
};

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const {singer, album, imageUrl, release, label, sales} = Object.fromEntries(formData);

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert("Edit error")
    }

    await updateAlbum(id, singer, album, imageUrl, release, label, sales);
    page.redirect("/dashboard")
};