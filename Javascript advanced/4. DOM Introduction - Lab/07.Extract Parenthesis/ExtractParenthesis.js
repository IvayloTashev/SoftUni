function extract(content) {

    let text = document.getElementById("content").textContent;
    let pattern = /\([A-Za-z\s]+\)/g;
    let matches = text.match(pattern);

    let result = [];

    for (let match of matches) {
        let currWord = match.match(/[A-Za-z\s]+/g);
        result.push(currWord);
    }

    return result.join(`; `);

}