async function lockedProfile() {
    const mainRef = document.querySelector(`main`)
    mainRef.innerHTML = "";

    const URL = `http://localhost:3030/jsonstore/advanced/profiles`;

    let response = await fetch(URL);
    let data = await response.json();

    let counter = 1;

    for (let profile of Object.entries(data)) {
        let div = document.createElement(`div`);
        div.classList.add(`profile`);
        div.innerHTML += createProfiles(profile, counter);
        mainRef.appendChild(div);
        counter++;
    }

    let buttons = document.querySelectorAll(`button`);

    for (let btn of buttons) {
        btn.addEventListener(`click`, onClick);
    }

    function onClick(event) {
        let hidenInfo = event.target.parentElement.querySelector(`div`);
        let checkBoxes = event.target.parentElement.querySelector(`input[type="radio"]:checked`);

        if (checkBoxes.value == "unlock") {
            if (event.target.textContent == `Show more`) {
                hidenInfo.style.display = `block`;
                event.target.textContent = `Hide it`
            } else {
                hidenInfo.style.display = `none`;
                event.target.textContent = `Show more`
            }
        }
    }

    function createProfiles(data, counter) {
        let result = `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${data[1].username}" disabled readonly />
        <div class="user${counter}Username" style="display: none;">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${data[1].email}" disabled readonly />
            <label>Age:</label>\n
             <input type="text" name="user${counter}Age" value="${data[1].age}" disabled readonly />
        </div>
        <button>Show more</button>
        `;
        return result;
    }
}
