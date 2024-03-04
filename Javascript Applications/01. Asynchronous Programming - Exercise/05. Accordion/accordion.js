async function solution() {
    const mainRef = document.getElementById(`main`);
    let URL = {
        list: `http://localhost:3030/jsonstore/advanced/articles/list`,
        details: `http://localhost:3030/jsonstore/advanced/articles/details/`
    }

    let titleResponse = await fetch(URL.list);
    let titleData = await titleResponse.json();

    for (let title of titleData) {
        let div = document.createElement(`div`);
        div.classList.add(`accordion`);

        let extaResponse = await fetch(URL.details + title._id);
        let extraData = await extaResponse.json();

        div.innerHTML = `
        <div class="head">
            <span>${title.title}</span>
            <button class="button" id="${title._id}">More</button>
        </div>
        <div class="extra" style="display: none;">
            <p>${extraData.content}</p>
        </div>
        `;

        mainRef.appendChild(div);
    }

    let buttons = document.querySelectorAll(`button`);
    buttons.forEach(btn => btn.addEventListener(`click`, onClick));

    function onClick(event) {
        let div = event.target.parentElement.parentElement.children[1];

        if (div.style.display == "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

solution()
