window.addEventListener('load', solution);

function solution() {
  const formRef = document.querySelector(`form`);
  formRef.addEventListener(`submit`, onSubmit);
  const addBtnRef = document.getElementById(`add-btn`);
  const employeeRef = document.getElementById(`employee`);
  const categoryRef = document.getElementById(`category`);
  const urgencyRef = document.getElementById(`urgency`);
  const teamRef = document.getElementById(`team`);
  const descriptionRef = document.getElementById(`description`);
  const previewListUl = document.querySelector(`.preview-list`);
  const pendingListUl = document.querySelector(`.pending-list`);
  const resolvedListUl = document.querySelector(`.resolved-list`);

  function onSubmit(event) {
    event.preventDefault();

    let employee = employeeRef.value;
    let category = categoryRef.value;
    let urgency = urgencyRef.value;
    let team = teamRef.value;
    let description = descriptionRef.value;

    if (!employee || !category || !urgency || !team || !description) {
      return;
    }

    let li = document.createElement(`li`);
    li.classList.add(`problem-content`);
    let article = createArticle(employee, category, urgency, team, description);
    li.innerHTML += article;
    let editBtn = li.children[1].addEventListener(`click`, onEdit);
    let continueBtn = li.children[2].addEventListener(`click`, onContinue);
    previewListUl.appendChild(li);

    formRef.reset();
    addBtnToggle();
  }


  function onEdit(event) {
    let li = event.target.parentElement;
    let inputInfo = event.target.parentElement.children[0].children;

    let employee = inputInfo[0].textContent.split(`From: `);
    let category = inputInfo[1].textContent.split(` `);
    let urgency = inputInfo[2].textContent.split(` `);
    let team = inputInfo[3].textContent.split(`Assigned to: `);
    let description = inputInfo[4].textContent.split(`Description: `);

    employeeRef.value = employee[1];
    categoryRef.value = category[1];
    urgencyRef.value = urgency[1];
    teamRef.value = team[1];
    descriptionRef.value = description[1];

    li.remove();
    addBtnToggle();
  }


  function onContinue(event) {
    let li = event.target.parentElement;

    let editBtn = event.target.parentElement.children[1];
    let continueBtn = event.target.parentElement.children[2];
    editBtn.remove();
    continueBtn.remove();

    li.innerHTML += createButton("resolve-btn", "Resolved");
    let resolvedBtn = li.children[1];
    resolvedBtn.addEventListener(`click`, onResolved);

    pendingListUl.appendChild(li);
  }


  function onResolved(event) {
    let li = event.target.parentElement;
    let resolvedBtn = event.target.parentElement.children[1];
    resolvedBtn.remove();

    li.innerHTML += createButton("clear-btn", "Clear");
    let clearBtn = li.children[1];
    clearBtn.addEventListener(`click`, onClear);
    resolvedListUl.appendChild(li);
  }

  function onClear(event) {
    event.target.parentElement.remove();
  }

  function createArticle(employee, category, urgency, team, description) {
    let result = `<article>\n`
    result += `<p>From: ${employee}</p>\n`
    result += `<p>Category: ${category}</p>\n`
    result += `<p>Urgency: ${urgency}</p>\n`
    result += `<p>Assigned to: ${team}</p>\n`
    result += `<p>Description: ${description}</p>\n`
    result += `</article>`
    result += createButton("edit-btn", "Edit");
    result += createButton("continue-btn", "Continue");
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




