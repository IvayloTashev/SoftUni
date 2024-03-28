import { deleteFact } from "../data/facts.js";
import { html, render, page } from "../lib.js";

export async function showDelete(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure?")

    if (confirmation) {
        await deleteFact(id);
        page.redirect("/dashboard")
    }
}