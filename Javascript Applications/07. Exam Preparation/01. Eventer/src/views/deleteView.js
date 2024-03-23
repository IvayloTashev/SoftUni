import { deleteEvent } from "../data/events.js";
import { page } from "../lib.js";

export async function deleteView(ctx) {
    const id = ctx.params.id;
    const confirmation = confirm("Are you sure")

    if(confirmation) {
        await deleteEvent(id);
        page.redirect("/events")
    }

}