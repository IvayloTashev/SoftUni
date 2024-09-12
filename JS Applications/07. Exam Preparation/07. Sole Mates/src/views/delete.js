import { deleteShoe } from "../data/shoes.js";
import { page } from "../lib.js";

export async function showDelete(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure?");
    
    if (confirmation) {
        await deleteShoe(id);
        page.redirect("/dashboard");
    }
}