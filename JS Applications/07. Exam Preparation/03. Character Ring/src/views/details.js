import { getCharById } from "../data/chars.js";
import { alreadyLiked, likeCharacter, likeCounts } from "../data/likes.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemp = (charData, hasUser, isOwner, likes, likedByUser) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${charData.imageUrl} alt="example1" />
        <div>
            <p id="details-category">${charData.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${charData.description}</p>
                    <p id ="more-info">${charData.moreInfo}</p>
                </div>
            </div>
            <h3>Is This Useful:<span id="likes">${likes}</span></h3>
            <!-- TODO BONUS -->
            ${hasUser ? html`
                <div id="action-buttons">
                    ${isOwner ? html `
                    <a href="/edit/${charData._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${charData._id}" id="delete-btn">Delete</a>` : (!likedByUser ? html`
                    <a href="javascript:void(0)" id="like-btn" @click=${likeChar}>Like</a>` : "")}
                </div>` : ""}
        </div>
    </div>
</section>`;

let context = null;
export async function showDetailsVeiw(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getCharById(id),
        likeCounts(id)
    ]

    const user = getUserData();

    if (user) {
        requests.push(alreadyLiked(id, user._id))
    }

    const [charData, likes, likedByUser] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == charData._ownerId

    render(detailsTemp(charData, hasUser, isOwner, likes, likedByUser));
}

async function likeChar(event) {
    event.preventDefault();
    const id = context.params.id;
    await likeCharacter(id);
    page.redirect(`/details/${id}`);
}