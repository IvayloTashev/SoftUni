function addItem() {
    let textBox = document.getElementById("newItemText");
    let ulElement = document.getElementById("items");

    if (textBox.value.length > 0) {
        let liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = textBox.value;
    }

    textBox.value = "";

}