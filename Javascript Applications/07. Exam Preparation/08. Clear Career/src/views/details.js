import { getOfferById } from "../data/offers.js";
import { getUserData } from "../data/util.js";
import { html, render } from "../lib.js";

const detailsTemplate = (offerData, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${offerData.imageUrl} alt="example1" />
            <p id="details-title">${offerData.title}</p>
            <p id="details-category">Category: <span id="categories">${offerData.category}</span></p>
            <p id="details-salary">Salary: <span id="salary-number">${offerData.salary}</span></p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Description</h4>
                    <span>${offerData.description}</span>
                </div>
                <div id="details-requirements">
                    <h4>Requirements</h4>
                    <span>${offerData.requirements}</span>
                </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>
            <!--Edit and Delete are only for creator-->

            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${offerData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${offerData._id}" id="delete-btn">Delete</a>

                <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="" id="apply-btn">Apply</a> -->
            </div>` : null}
        </div>
    </section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    
    const offerData = await getOfferById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == offerData._ownerId;

    render(detailsTemplate(offerData, isOwner))
};