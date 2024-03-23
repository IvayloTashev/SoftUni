import { getAllEvents } from "../data/events.js";
import { html, render } from "../lib.js";

const eventsTemplate = (data) => html `
<h2>Current Events</h2>
<section id="dashboard">
    ${data.length ? data.map(signleEventTemplate) : html`<h4>No Events yet.</h4>`}
</section>`;

const signleEventTemplate = (event) => html `
    <div class="event">
        <img src=${event.imageUrl} alt="example1" />
        <p class="title">${event.name}</p>
        <p class="date">${event.date}</p>
        <a class="details-btn" href="/events/${event._id}">Details</a>
    </div>
`;

export async function showEventsView(ctx) {
    const data = await getAllEvents();
    render(eventsTemplate(data))
}



