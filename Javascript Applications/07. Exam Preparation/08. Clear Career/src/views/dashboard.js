import { getAllOffers } from "../data/offers.js";
import { html, render } from "../lib.js";

const dashboardTemplate = offers => html `
    <section id="dashboard">
          <h2>Job Offers</h2>
            ${offers.length ? offers.map(offer => offerTemplate(offer)) : html`<h2>No offers yet.</h2>`}
        </section>
`;

const offerTemplate = (offer) => html`
    <div class="offer">
        <img src=${offer.imageUrl} alt="example1" />
        <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
        <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
        <a class="details-btn" href="/details/${offer._id}">Details</a>
    </div>
`;

export async function showDashboardView(ctx) {
    const offers = await getAllOffers();
    render(dashboardTemplate(offers));
};
