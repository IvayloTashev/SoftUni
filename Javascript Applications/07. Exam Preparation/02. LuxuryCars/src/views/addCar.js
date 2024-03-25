import { addCar } from "../data/cars.js";
import { html, render, page } from "../lib.js";

const addCarTemplete = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form form-auto">
        <h2>Share Your Car</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="model" id="model" placeholder="Model"/>
            <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL"/>
            <input type="text" name="price" id="price" placeholder="Price in Euro"/>
            <input type="number" name="weight" id="weight" placeholder="Weight in Kg"/>
            <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh"/>
            <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50"></textarea>
            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

export function showAddCarVeiw(ctx) {
    render(addCarTemplete())
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { model, imageUrl, price, weight, speed, about } = Object.fromEntries(formData);

    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert("All fields are required")
    }

    await addCar(model, imageUrl, price, weight, speed, about);
    page.redirect("/catalog")


}