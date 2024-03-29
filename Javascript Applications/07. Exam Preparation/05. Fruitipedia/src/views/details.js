import { getFruitById, deleteFruit } from "../data/fruits.js";
import { getUserData } from "../data/util.js";
import { html, render, page } from "../lib.js";

const detailsTemplate = (fruitData, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
            <img id="details-img" src="${fruitData.imageUrl}" alt="example1" />
            <p id="details-title">${fruitData.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${fruitData.description}</p>
                <p id = "nutrition">Nutrition</p>
                <p id = "details-nutrition">${fruitData.nutrition}</p>
                      
              </div>
              <div id="action-buttons">
      ${isOwner
        ? html`<a href="/edit/${fruitData._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
              >Delete</a
            >`
        : ""}
    </div>
</div>
`;

let context = null;
export async function detailsView(ctx) {
    context = ctx;
    const id = context.params.id;
    const fruitData = await getFruitById(id);

    const user = getUserData()
    const isOwner = user && user._id === fruitData._ownerId;

    render(detailsTemplate(fruitData, isOwner));

}

async function onDelete(event) {
    event.preventDefault();
    const id = context.params.id;
    const confirmation = confirm("Are you sure?");

    if (confirmation) {
        await deleteFruit(id);
        page.redirect("/dashboard");
    }
}