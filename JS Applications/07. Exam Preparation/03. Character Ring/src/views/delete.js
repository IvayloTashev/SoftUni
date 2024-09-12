import { deleteChar } from "../data/chars.js";
import { page } from "../lib.js";

export async function showDeleteVeiw(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure?")

    if (confirmation) {
        await deleteChar(id);
        page.redirect("/characters")
    }
}