window.addEventListener('load', solve);

function solve() {
        const formRef = document.querySelector(`form`);
        formRef.addEventListener(`submit`, onSubmit);
        const carModelRef = document.getElementById(`car-model`);
        const carYearRef = document.getElementById(`car-year`);
        const partNameRef = document.getElementById(`part-name`);
        const partNumberRef = document.getElementById(`part-number`);
        const conditionRef = document.getElementById(`condition`);
        const nextBtnRef = document.getElementById(`next-btn`);
        const partInfoUl = document.querySelector(`.info-list`);
        const imgCompleteRef = document.getElementById(`complete-img`);
        const completeParaRef = document.getElementById(`complete-text`);
        const confirmInfoUl = document.querySelector(`.confirm-list`);

        function onSubmit(event) {
                event.preventDefault();
                let carModel = carModelRef.value;
                let carYear = carYearRef.value;
                let partName = partNameRef.value;
                let partNumber = partNumberRef.value;
                let condition = conditionRef.value;

                if (!carModel || !carYear || !partName || !partNumber || !condition) {
                        return;
                } else if (carYear < 1980 || carYear > 2023) {
                        return;
                }

                imgCompleteRef.style.visibility = "hidden";
                completeParaRef.textContent = "";

                let li = document.createElement(`li`);
                li.classList.add(`part-content`);

                li.innerHTML = createArticle(carModel, carYear, partName, partNumber, condition);
                li.children[1].addEventListener(`click`, onEdit);
                li.children[2].addEventListener(`click`, onContinue);

                partInfoUl.appendChild(li);

                formRef.reset();
                nextBtnToggle();
        }

        function onEdit(event) {
                let li = event.target.parentElement;
                let inputInfo = li.querySelectorAll(`p`);
       
                let carModel = inputInfo[0].textContent.split(`Car Model: `)
                let carYear = inputInfo[1].textContent.split(`Car Year: `)
                let partName = inputInfo[2].textContent.split(`Part Name: `)
                let partNumber = inputInfo[3].textContent.split(`Part Number: `)
                let condition = inputInfo[4].textContent.split(`Condition: `)

                carModelRef.value = carModel[1];
                carYearRef.value = carYear[1];
                partNameRef.value = partName[1];
                partNumberRef.value = partNumber[1];
                conditionRef.value = condition[1];
   
                li.remove();
                nextBtnToggle();
        }

        function onContinue(event) {
                let li = event.target.parentElement;
                li.children[2].remove();
                li.children[1].remove();

                li.innerHTML += createButton("confirm-btn", "Confirm");
                li.innerHTML += createButton("cancel-btn", "Cancel");

                li.children[1].addEventListener(`click`, onConfirm);
                li.children[2].addEventListener(`click`, onCancel);

                confirmInfoUl.appendChild(li);
        }

        function onConfirm(event) {
                event.target.parentElement.remove();
                nextBtnToggle();
                imgCompleteRef.style.visibility = "visible";
                completeParaRef.textContent = "Part is Ordered!";
        }

        function onCancel(event) {
                event.target.parentElement.remove();
                nextBtnToggle();
        }

        function createArticle(carModel, carYear, partName, partNumber, condition) {
                let result = `<article>\n`;
                result += `<p>Car Model: ${carModel}</p>\n`;
                result += `<p>Car Year: ${carYear}</p>\n`;
                result += `<p>Part Name: ${partName}</p>\n`;
                result += `<p>Part Number: ${partNumber}</p>\n`;
                result += `<p>Condition: ${condition}</p>\n`;
                result += `</article>`;
                result += createButton("edit-btn", "Edit");
                result += createButton("continue-btn", "Continue");
                return result;
        }

        function createButton(classes, text) {
                return `<button class="${classes}">${text}</button>`;
        }

        function nextBtnToggle() {
                if (nextBtnRef.disabled == false) {
                        nextBtnRef.disabled = true;
                } else {
                        nextBtnRef.disabled = false;
                }
        }
}




