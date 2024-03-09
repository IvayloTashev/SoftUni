document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.querySelector('form').addEventListener('submit', submitHandler);
});

const url = `http://localhost:3030/jsonstore/collections/books`
const tbody = document.querySelector('tbody');

async function loadBooks() {
    const response = await fetch(url);
    const data = await response.json();

    tbody.innerHTML = '';

    for (let [id, book] of Object.entries(data)) {
        tbody.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn" data-id="${id}">Edit</button>
                <button class="deleteBtn" data-id="${id}">Delete</button>
             </td>
        </tr>
        `
    }
    tbody.querySelectorAll('.editBtn').forEach(btn => btn.addEventListener('click', onEdit));
    tbody.querySelectorAll('.deleteBtn').forEach(btn => btn.addEventListener('click', onDelete));
}

async function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    if (title && author) {
        const book = { title, author };
        if (event.target.dataset.id) {
            await onUpdate(event.target.dataset.id, book);
        } else {
            await onCreate(book);
        }
        event.target.reset();
        delete event.target.dataset.id;
        await loadBooks();
    }
}

async function onCreate(book) {
    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function onEdit(event) {
    const bookId = event.target.dataset.id;
    const bookDetails = await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`).then(res => res.json());
    const form = document.querySelector('form');
    form['title'].value = bookDetails.title;
    form['author'].value = bookDetails.author;
    form.dataset.id = bookId;
}

async function onUpdate(id, book) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
}

async function onDelete(event) {
    const bookId = event.target.dataset.id;
    await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
        method: 'DELETE'
    });
    await loadBooks();
}