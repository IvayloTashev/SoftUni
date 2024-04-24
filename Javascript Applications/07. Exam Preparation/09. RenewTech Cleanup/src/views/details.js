import { getsolutionById } from "../data/solutions.js";
import { getUserData } from "../data/util.js";
import { html, render } from "../lib.js";

const detailsTemplate = (solutionsData, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${solutionsData.imageUrl} alt="example1" />
            <div>
                <p id="details-type">${solutionsData.type}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${solutionsData.description}</p>
                        <p id="more-info">${solutionsData.learnMore}</p>
                    </div>
                 </div>
                <h3>Like Solution:<span id="like">0</span></h3>

              ${isOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${solutionsData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${solutionsData._id}" id="delete-btn">Delete</a>
                <!--Bonus - Only for logged-in users ( not authors )-->
                <!-- <a href="#" id="like-btn">Like</a> -->
              </div>` : null}
            </div>
        </div>
    </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const solutionsData = await getsolutionById(id);

    const user = getUserData();
    const isOwner = !!user && user._id == solutionsData._ownerId;
    render(detailsTemplate(solutionsData, isOwner));
};

