import { checklikes, getFactById, giveLike, userAlreadyLike } from "../data/facts.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemp = (factData, likes, alreadyLiked, hasUser, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${factData.imageUrl} alt="example1" />
        <p id="details-category">${factData.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">${factData.description}</p>
                <p id ="more-info">${factData.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">${likes}</span></h3>

            ${hasUser ? html`
            <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${factData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${factData._id}" id="delete-btn">Delete</a>` : (!alreadyLiked ? html`
                <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>` : null)}
            </div>` : null}
        </div>
    </div>
</section>`;

let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getFactById(id),
        checklikes(id)
    ];

    const user = getUserData();
    
    if (user) {
        requests.push(userAlreadyLike(id, user._id))
    };
  
    const [factData, likes, alreadyLiked] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && factData._ownerId == user._id;


    render(detailsTemp(factData, likes, alreadyLiked, hasUser, isOwner))
}

async function onLike(event) {
    event.preventDefault();
    const id = context.params.id;

    await giveLike(id);

    page.redirect(`/details/${id}`)

}