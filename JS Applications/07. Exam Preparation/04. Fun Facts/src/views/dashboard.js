import { getAllFacts } from "../data/facts.js";
import { html, render, page } from "../lib.js";

const dashboardTemp = (facts) => html`
<h2>Fun Facts</h2>
<section id="dashboard">
    ${facts.map(fact => factTemp(fact))}
</section>
    ${!facts.length ? html`<h2>No Fun Facts yet.</h2>` : ""}    
`;

const factTemp = (fact) => html`
<div class="fact">
    <img src=${fact.imageUrl} />
    <h3 class="category">${fact.category}</h3>
    <p class="description">${fact.description}</p>
    <a class="details-btn" href="/details/${fact._id}">More Info</a>
</div>`;

export async function showDashboard(ctx) {
    const facts = await getAllFacts();
    render(dashboardTemp(facts))
};
