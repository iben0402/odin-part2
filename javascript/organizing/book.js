let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        var isRead = read ? 'read' : 'not read yet';
        return `${title} by ${author}, ${pages} pages, ${isRead}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deleteBookFromLibrary(index) {
    myLibrary.splice(index, 1); // Remove the book at the specified index
    displayBooks(myLibrary); // Update the display
}

function displayBooks(myLibrary) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    myLibrary.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.setAttribute('data-index', myLibrary.indexOf(book));
        div.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <button class="read-button">${book.read ? 'Read' : 'Not read yet'}</button>
            <button class="remove-button">Remove</button>
        `;

        // Add event listener for the "Read" button
        const readButton = div.querySelector('.read-button');
        readButton.addEventListener('click', () => {
            book.read = !book.read; // Toggle the read status
            displayBooks(myLibrary); // Update the display
        });

        // Add event listener for the "Remove" button
        const removeButton = div.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            const index = parseInt(div.getAttribute('data-index')); // Get the book's index
            deleteBookFromLibrary(index); // Delete the book and update the display
        });
        
        container.appendChild(div);
    });
}

var theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
var theGameOfThrones = new Book('A Game of Thrones', 'George R.R. Martin', 694, true);
var theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, false);
var theWitcher = new Book('The Witcher', 'Andrzej Sapkowski', 325, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theGameOfThrones);
addBookToLibrary(theLordOfTheRings);
addBookToLibrary(theWitcher);

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const addBookButton = document.getElementById('add-book-button');
    addBookButton.addEventListener('click', () => {
        const title = prompt('Enter the title of the book:');
        const author = prompt('Enter the author of the book:');
        const pages = parseInt(prompt('Enter the number of pages:'));
        const read = confirm('Has the book been read?');

        const newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayBooks(myLibrary);
    });
});


displayBooks(myLibrary);