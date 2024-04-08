import { getCarById, updateCar } from "../data/cars.js";
import { html, render, page} from "../lib.js";

const editTemplate = (carData) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form form-auto">
        <h2>Edit Your Car</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="model" id="model" placeholder="Model" .value=${carData.model} />
            <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" .value=${carData.imageUrl} />
            <input type="text" name="price" id="price" placeholder="Price in Euro" .value=${carData.price} />
            <input type="number" name="weight" id="weight" placeholder="Weight in Kg" .value=${Number(carData.weight)} />
            <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" .value=${carData.speed} />
            <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50" .value=${carData.about}> </textarea>
            <button type="submit">Edit</button>
        </form>
    </div>
</section>`;

let context = null;
export async function showEditView(ctx) {
    context = ctx;
    const id = context.params.id;
    const carData = await getCarById(id);
    render(editTemplate(carData));
};

async function onEdit(event) {
    event.preventDefault();
    const id = context.params.id;

    const formData = new FormData(event.target);
    const { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert("All fields are required")
    }

    await updateCar(id, model, imageUrl, price, weight, speed, about);
    page.redirect(`/details/${id}`)
};


