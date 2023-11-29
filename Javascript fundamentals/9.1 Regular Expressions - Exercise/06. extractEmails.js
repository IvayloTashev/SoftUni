function extractEmails(input) {

    let pattern = /\b[A-Za-z0-9](?:[._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:\.[A-Za-z]{2,})+\b/g;
    let matches = input.match(pattern);

    for (let match of matches) {
        console.log(match);
    }

}

extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`)