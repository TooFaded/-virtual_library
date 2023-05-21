let myLibrary = [];

function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.readBook = readBook;

}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);

}