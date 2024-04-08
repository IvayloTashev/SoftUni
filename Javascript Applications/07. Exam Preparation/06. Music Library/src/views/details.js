import { addLike, alreadyLiked, getLikesCount } from "../data/likes.js";
import { getAlbumById } from "../data/music.js";
import { getUserData } from "../data/util.js";
import { html, render, page} from "../lib.js";

const detailsTemp = (albumData, hasUser, isOwner, likesCount, userLiked) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${albumData.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${albumData.singer}</span></p>
                <p>
                <strong>Album name:</strong><span id="details-album">${albumData.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${albumData.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${albumData.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${albumData.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${likesCount}</span></div>

            ${hasUser ? btnsDivTemp(albumData, isOwner, userLiked) : ""}

        </div>
    </section>
`;

const btnsDivTemp = (albumData, isOwner, userLiked) => html`
    <div id="action-buttons">
        ${isOwner ? editDeleteBtnsTemp(albumData) : !userLiked ? likeBtn() : ""}
    </div>
`;

const likeBtn = () => html`
    <a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>
`;

const editDeleteBtnsTemp = (albumData) => html`
    <a href="/edit/${albumData._id}" id="edit-btn">Edit</a>
    <a href="/delete/${albumData._id}" id="delete-btn">Delete</a>
`;

let context = null;
export async function showDetails(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getAlbumById(id),
        getLikesCount(id)
    ];

    const user = getUserData();

    if (user) {
        requests.push(alreadyLiked(id, user._id))
    }

    const [albumData, likesCount, userLiked] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == albumData._ownerId;

    render(detailsTemp(albumData, hasUser, isOwner, likesCount, userLiked));
};

async function onLike(event) {
    event.preventDefault();
    const id = context.params.id;
    await addLike(id);
    page.redirect(`/details/${id}`);
}

