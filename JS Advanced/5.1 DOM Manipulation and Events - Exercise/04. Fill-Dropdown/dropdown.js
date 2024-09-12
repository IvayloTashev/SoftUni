function addItem() {
    
    let newItemText = document.getElementById(`newItemText`);
    let newItemValue = document.getElementById(`newItemValue`);
    let selectMenu = document.getElementById(`menu`);

    let optionElement = document.createElement(`option`);
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;
    selectMenu.appendChild(optionElement);

    newItemText.value = ``;
    newItemValue.value = ``;

}