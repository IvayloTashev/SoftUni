class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let data = this.books.find(x => x.title == title);

        if (data) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        let obj = {
            title,
            author
        }

        this.books.push(obj);
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember(memberName) {

        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName, bookTitle) {

        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let bookData = this.books.find(x => x.title == bookTitle);

        if (!bookData) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }

        this.books = this.books.filter(x => x.title != bookTitle);
        return `Member ${memberName} has been assigned the book "${bookData.title}" by ${bookData.author}.`
    }

    generateReadingReport() {

        if (this.members.length == 0) {
            return `No members in the book club.`;
        }

        if (this.books.length == 0) {
            return `No available books in the library.`
        }

        let result = [`Available Books in ${this.library} library:`];

        for (let book of this.books) {
            result.push(`"${book.title}" by ${book.author}`);
        }

        return result.join(`\n`);
    }
}


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));

console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.assignBookToMember("Ivo", "1984"));
console.log(myBookClub.generateReadingReport());

/*
The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
The book "1984" by George Orwell has been added to The Bookaholics library.
Member Alice has been joined to the book club.
Member Peter has been joined to the book club.
Member Peter has been assigned the book "1984" by George Orwell.
Member Alice has been assigned the book "To Kill a Mockingbird" by Harper Lee.
No available books in the library.
*/