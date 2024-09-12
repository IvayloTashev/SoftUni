import { getAllCars } from "../data/cars.js";
import { html, render, page} from "../lib.js";

const catalogTemplate = (carsData) => html`
<!-- Dashboard page -->
<h3 class="heading">Our Cars</h3>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${carsData.map(carTemplate)}
    </section>
        <!-- Display an h2 if there are no posts -->
        ${!carsData.length ? html`<h3 class="nothing">Nothing to see yet</h3>` : ""}
`;

const carTemplate = (car) => html`
<div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
</div>
`;

export async function showCatalogView(ctx) {
    const carsData = await getAllCars();
    render(catalogTemplate(carsData));
}
