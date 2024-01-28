function addItem() {
    let textBox = document.getElementById("newItemText");
    let ulElement = document.getElementById("items");

    if (textBox.value.length == 0) {
        return;
    }

    let liElement = document.createElement("li");
    liElement.textContent = textBox.value;
    ulElement.appendChild(liElement);

    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = "[Delete]";
    deleteBtn.href = "#";
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", onDelete);

    textBox.value = "";

    function onDelete(event) {
        let deleteBtn = event.target;
        let liElement = deleteBtn.parentElement;
        liElement.remove();
     
    }

}
