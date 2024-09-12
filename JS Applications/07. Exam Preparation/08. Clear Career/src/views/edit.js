import { updateOffer, getOfferById} from "../data/offers.js";
import { html, render, page } from "../lib.js";

const editTemplate = (offerData) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Offer</h2>
            <form class="edit-form" @submit=${onEdit}>
                <input type="text" name="title" id="job-title" placeholder="Title" .value=${offerData.title} />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offerData.imageUrl} />
                <input type="text" name="category" id="job-category" placeholder="Category" .value=${offerData.category} />
                <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${offerData.description} ></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50" .value=${offerData.requirements} ></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offerData.salary} />
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

let context = null;

export async function showEditView(ctx) {
    context = ctx;
    const id = context.params.id;
    const offerData = await getOfferById(id);
    render(editTemplate(offerData));
}

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const {title, imageUrl, category, description, requirements, salary} = Object.fromEntries(formData);

    if (!title || !imageUrl || !category || !description || !requirements || !salary) {
        return alert("Edit error")
    }

    await updateOffer(id, title, imageUrl, category, description, requirements, salary);
    page.redirect(`/details/${id}`)
}