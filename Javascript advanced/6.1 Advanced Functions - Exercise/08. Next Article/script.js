function getArticleGenerator(articles) {
    let content = document.getElementById(`content`);
    let texts = Array.from(articles);

    return function() {
        if (texts.length == 0) {
            return;
        }

        let articleElement = document.createElement(`article`);
        nextText = texts.shift();
        articleElement.textContent = nextText
        content.appendChild(articleElement);
    }

}
