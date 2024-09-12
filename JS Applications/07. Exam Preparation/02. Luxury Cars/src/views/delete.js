import { deleteCar } from "../data/cars.js";
import { html, render, page} from "../lib.js";

export async function showDeleteCar(ctx) {
    const id = ctx.params.id;

    const confirmation = confirm("Are you sure?");

    if (confirmation) {
        await deleteCar(id);
        page.redirect("/catalog")
    }
}