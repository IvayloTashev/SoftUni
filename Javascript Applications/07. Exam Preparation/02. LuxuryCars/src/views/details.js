import { getCarById } from "../data/cars.js";
import { getUserData } from "../data/util.js";
import { html, render, page} from "../lib.js";

const detailsTemplate = (carData, ownerId) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${carData.imageUrl} alt="example1" />
        <p id="details-title">${carData.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="price">Price: €${carData.price}</p>
                <p class="weight">Weight: ${carData.weight} kg</p>
                <p class="top-speed">Top Speed: ${carData.speed} kph</p>
                <p id="car-description"> ${carData.about}</p>
            </div>
                ${carData._ownerId == ownerId ? html`
                    <!--Edit and Delete are only for creator-->
                    <div id="action-buttons">
                        <a href="/edit/${carData._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${carData._id}" id="delete-btn">Delete</a>
                    </div>` : ""}
        </div>
    </div>
</section>
`;

export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    const ownerId = getUserData()?._id;
    const carData = await getCarById(id)
    render(detailsTemplate(carData, ownerId));
}


