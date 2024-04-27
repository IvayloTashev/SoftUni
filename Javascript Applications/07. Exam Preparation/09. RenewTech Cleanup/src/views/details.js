import { alreadyLikedByUser, getsolutionById, likeCount } from "../data/solutions.js";
import { getUserData } from "../data/util.js";
import { html, render } from "../lib.js";

const detailsTemplate = (solutionsData, isOwner, likeCounter) => html`
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
                <h3>Like Solution:<span id="like">${likeCounter}</span></h3>



              ${isOwner ? html`
              <div id="action-buttons">
                <a href="/edit/${solutionsData._id}" id="edit-btn">Edit</a>
                <a href="/delete/${solutionsData._id}" id="delete-btn">Delete</a>
                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="javascript:void(0)" id="like-btn" @submit=${onLine}>Like</a>
              </div>` : null}
            </div>
        </div>
    </section>`;

const divContainer = () => html`
    <div id="action-buttons">
        ${}
    </div>


let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const id = context.params.id;

    const requests = [
        getsolutionById(id),
        likeCount(id)
    ]

    const user = getUserData();

    if (user) {
        requests.push(alreadyLikedByUser(id, user._id))
    }

    const [solutionsData, likeCounter, userLiked] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == solutionsData._ownerId;

    render(detailsTemplate(solutionsData, isOwner, likeCounter));
};

async function onLike(event) {
    event.preventDefault();
    const id = context.params.id;
    debugger
};


