window.addEventListener("load", solve);

function solve() {
    const formRef = document.querySelector(`form`);
    const addBtnRef = document.getElementById(`add-btn`)
    addBtnRef.addEventListener(`click`, onAdd);
    const gemNameRef = document.getElementById(`gem-name`);
    const colorRef = document.getElementById(`color`);
    const caratsRef = document.getElementById(`carats`);
    const priceRef = document.getElementById(`price`);
    const typeRef = document.getElementById(`type`)
    const previewListUl = document.getElementById(`preview-list`);
    const colectionListUl = document.getElementById(`collection`);

    function onAdd(event) {
        let gemName = gemNameRef.value
        let color = colorRef.value;
        let carats = caratsRef.value;
        let price = priceRef.value;
        let type = typeRef.value;

        if (!gemName || !color || !carats || !price || !type) {
            return;
        }

        let li = document.createElement(`li`);
        li.classList.add(`gem-info`);
        li.innerHTML = createArticle(gemName, color, carats, price, type);
        li.children[1].addEventListener(`click`, onSave);
        li.children[2].addEventListener(`click`, onEdit);
        li.children[3].addEventListener(`click`, onCancel);

        previewListUl.appendChild(li);
        formRef.reset();
        addBtnToggle();
    }

    function onSave(event) {
        let oldLi = event.target.parentElement;
        let inputInfo = oldLi.children[0].children;

        let gemName = inputInfo[0].textContent
        let color = inputInfo[1].textContent.split(`Color: `);
        let carats = inputInfo[2].textContent.split(`Carats: `);
        let price = inputInfo[3].textContent.split(`Price: `)[1].split(`$`);
        let type =inputInfo[4].textContent.split(`Type: `);
        oldLi.remove();

        let newLi = document.createElement(`li`);
        let p = document.createElement(`p`);
        p.classList.add(`collection-item`);
        p.textContent = `${gemName} - Color: ${color[1]}/ Carats: ${carats[1]}/ Price: ${price[0]}$/ Type: ${type[1]}`;

        newLi.appendChild(p);
        colectionListUl.appendChild(newLi);
        addBtnToggle();
    }

    function onEdit(event) {
        let li = event.target.parentElement;
        let inputInfo = li.children[0].children;

        let gemName = inputInfo[0].textContent
        let color = inputInfo[1].textContent.split(`Color: `);
        let carats = inputInfo[2].textContent.split(`Carats: `);
        let price = inputInfo[3].textContent.split(`Price: `)[1].split(`$`);
        let type =inputInfo[4].textContent.split(`Type: `);

        gemNameRef.value = gemName
        colorRef.value = color[1];
        caratsRef.value = carats[1];
        priceRef.value = price[0];
        typeRef.value = type[1];

        li.remove();
        addBtnToggle();
    }

    function onCancel(event) {
        event.target.parentElement.remove();
        addBtnToggle();
    }

    function createArticle(gemName, color, carats, price, type) {
        let result = `<article>\n`;
        result += `<h4>${gemName}</h4>\n`;
        result += `<p>Color: ${color}</p>\n`;
        result += `<p>Carats: ${carats}</p>\n`;
        result += `<p>Price: ${price}$</p>\n`;
        result += `<p>Type: ${type}</p>\n`;
        result += `</article>`;
        result += createButton("save-btn", "Save to Collection");
        result += createButton("edit-btn", "Edit Information");
        result += createButton("cancel-btn", "Cancel");
        return result;
    }

    function createButton(classes, text) {
        return `<button class="${classes}">${text}</button>`;
    }

    function addBtnToggle() {
        if (addBtnRef.disabled == false) {
            addBtnRef.disabled = true
        } else {
            addBtnRef.disabled = false
        }
    }
}


