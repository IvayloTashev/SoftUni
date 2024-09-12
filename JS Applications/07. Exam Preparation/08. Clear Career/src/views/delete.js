import { deleteOffer } from "../data/offers.js";
import { page } from "../lib.js";

export async function showDeleteView(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are yuou sure?");

    if (confirmation) {
        await deleteOffer(id);
        page.redirect("/dashboard")
    }

}
