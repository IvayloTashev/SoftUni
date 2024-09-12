import { deleteAlbum } from "../data/music.js";
import { page } from "../lib.js";

export async function showDelete(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure?");

    if (confirmation) {
        await deleteAlbum(id);
        page.redirect("/dashboard")
    }
}