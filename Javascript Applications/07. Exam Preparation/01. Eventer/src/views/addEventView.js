import { createEvent } from "../data/events.js";
import { html, render, page } from "../lib.js";

const addEventTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Add Event</h2>
        <form class="create-form" @submit=${onCreate}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
            />
            <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
            />
            <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
            />
            <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
            ></textarea>
            <input
                type="text"
                name="date"
                id="date"
                placeholder="When?"
            />
            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

export function showAddEventview(ctx) {
    render(addEventTemplate())
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !description || !date) {
        return alert("All fields must be filled")
    }

    await createEvent(name, imageUrl, category, description, date);
    page.redirect("/events");
}