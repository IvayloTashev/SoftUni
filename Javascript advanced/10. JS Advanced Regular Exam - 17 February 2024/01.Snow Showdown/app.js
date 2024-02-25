window.addEventListener("load", solve);

function solve() {
  const formRef = document.querySelector(`form`);
  formRef.addEventListener(`submit`, onSubmit);
  const nameRef = document.getElementById(`snowman-name`);
  const heightRef = document.getElementById(`snowman-height`);
  const locationRef = document.getElementById(`location`);
  const creatorRef = document.getElementById(`creator-name`);
  const attributeRef = document.getElementById(`special-attribute`);
  const previewListUl = document.querySelector(`.snowman-preview`);
  const snowListUl = document.querySelector(`.snow-list`);
  const addBtnRef = document.querySelector(`.add-btn`);
  const mainRef = document.getElementById(`hero`);
  const bodyRef = document.querySelector(`body`);
  const imgRef = document.getElementById(`back-img`);

  function onSubmit(event) {
    event.preventDefault()

    let name = nameRef.value;
    let height = heightRef.value;
    let location = locationRef.value;
    let creator = creatorRef.value;
    let attribute = attributeRef.value;

    if (!name || !height || !location || !creator || !attribute) {
      return;
    }

    let li = document.createElement(`li`);
    li.classList.add(`snowman-info`);

    li.innerHTML = createArticle(name, height, location, creator, attribute);

    li.children[1].children[0].addEventListener(`click`, onEdit);
    li.children[1].children[1].addEventListener(`click`, onNext);

    previewListUl.appendChild(li);

    formRef.reset();
    addBtnToggle()
  }

  function onEdit(event) {
    let li = event.target.parentElement.parentElement;
    let inputInfo = li.querySelectorAll(`p`);

    let name = inputInfo[0].textContent.split(`Name: `);
    let height = inputInfo[1].textContent.split(`Height: `);
    let location = inputInfo[2].textContent.split(`Location: `);
    let creator = inputInfo[3].textContent.split(`Creator: `);
    let attribute = inputInfo[4].textContent.split(`Attribute: `);

    nameRef.value = name[1];
    heightRef.value = height[1];
    locationRef.value = location[1];
    creatorRef.value = creator[1];
    attributeRef.value = attribute[1];

    li.remove();
    addBtnToggle()
  }

  function onNext(event) {
    let li = event.target.parentElement.parentElement;
    li.classList.remove(`snowman-info`);
    li.classList.add(`snowman-content`);

    let article = li.children[0];
    event.target.parentElement.remove();

    article.innerHTML += createButton("send-btn", "Send")
    article.children[5].addEventListener(`click`, onSend);

    snowListUl.appendChild(li);
  }

  function onSend(event) {
    mainRef.remove();

    let backBtn = document.createElement(`button`);
    backBtn.classList.add(`back-btn`);
    backBtn.textContent = "Back";
    backBtn.addEventListener(`click`, onBack);

    bodyRef.appendChild(backBtn);
    imgRef.removeAttribute("hidden")
  }

  function onBack(event) {
    location.reload();
  }

  function createArticle(name, height, location, creator, attribute) {
    let result = `<article>\n`
    result += `<p>Name: ${name}</p>\n`;
    result += `<p>Height: ${height}</p>\n`;
    result += `<p>Location: ${location}</p>\n`;
    result += `<p>Creator: ${creator}</p>\n`;
    result += `<p>Attribute: ${attribute}</p>\n`;
    result += `</article>`
    result += `<div class="btn-container">`
    result += createButton("edit-btn", "Edit");
    result += createButton("next-btn", "Next");
    result += `</div>`
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
