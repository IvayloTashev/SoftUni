import { getAllCharecters } from "../data/chars.js";
import { html, render, page } from "../lib.js";

const charactersTemp = (charData) => html`
<!-- Dashboard page -->
<h2>Characters</h2>
<section id="characters">
    <!-- Display a div with information about every post (if any)-->
    ${charData.map(char => charTemp(char))}
</section>
${!charData.length ? html`<h2>No added Heroes yet.</h2>` : ""}
`;

const charTemp = (char) => html`
    <div class="character">
        <img src="${char.imageUrl}" alt="example1" />
        <div class="hero-info">
            <h3 class="category">${char.category} </h3>
            <p class="description">${char.description} </p>
            <a class="details-btn" href="/details/${char._id}">More Info</a>
        </div>
    </div>
`; 

export async function showCharectersView(ctx) {

    const charData = await getAllCharecters();

    
    render(charactersTemp(charData));
}