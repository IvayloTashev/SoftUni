import { getEventById } from "../data/events.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";
import { getVisitorsByEventId, goToEvent, isGoing } from "./goingVeiw.js";

const detailsTemplate = (event, hasUser, isOwner, visitors, isUserGoing) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${event.imageUrl} alt="example1" />
        <p id="details-title">${event.name}</p>
        <p id="details-category">
            Category: <span id="categories">${event.category}</span>
        </p>
        <p id="details-date">
            Date:<span id="date">${event.date}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
                <span>
                    ${event.description}
                </span>
            </div>
        </div>

        <h3>Going: <span id="go">${visitors}</span> times.</h3>

        ${hasUser ? html `
            <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                <a href="/delete/${event._id}" id="delete-btn">Delete</a>` : (!isUserGoing ? html`
                <a href="" id="go-btn" @click=${onGoing}>Going</a>` : null)}
            </div>` : null}
    </div>
</section>`;

let context = null;
export async function showDetailsView(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getEventById(id),
        getVisitorsByEventId(id)
    ];

    const user = getUserData();

    if (user) {
        requests.push(isGoing(id, user._id));
    }

    const [event, visitors, isUserGoing] = await Promise.all(requests)

    const hasUser = !!user;
    const isOwner = hasUser && user._id == event._ownerId;

    render(detailsTemplate(event, hasUser, isOwner, visitors, isUserGoing));
}

async function onGoing() {
    const id = context.params.id; 
    await goToEvent(id);
    page.redirect("/events/" + id);
}
