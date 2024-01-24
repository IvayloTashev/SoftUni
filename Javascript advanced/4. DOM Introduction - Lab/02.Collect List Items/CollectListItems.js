function extractText() {

    let list = document.getElementById("items");
    let textBox = document.getElementById("result");

    let arr = [];
    let items = Array.from(list.children);
   
    for (let item of items) {
        arr.push(item.textContent);
    }

    result = arr.join("\n");

    textBox.value = result;
}