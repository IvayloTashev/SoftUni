function deleteByEmail() {

    let data = Array.from(document.querySelectorAll("tbody tr"));
    let textBox = document.querySelector("label").children[0];
    let comment = document.getElementById("result");

    for (let row of data) {
        
        if (row.textContent.includes(textBox.value)) {
            row.remove();
            comment.textContent = "Deleted."
        } else {
            comment.textContent = "Not found."
        }
    }

    textBox.value = "";

}