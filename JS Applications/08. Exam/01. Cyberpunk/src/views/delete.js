import { deleteProduct } from "../data/products.js";
import { page } from "../lib.js";

export async function showDelete(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure");

    if (confirmation) {
        await deleteProduct(id);
        page.redirect("/market")
    }
}