//Array to store new book objects
let myLibrary = [];

//Constructor function to create new book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Function to add book object to library
function addBookToLibrary() {
    let title = prompt("Title of book?", "The Hobbit");
    let author = prompt("Name of author of book?", "JRR Tolkien");
    let pages = prompt("Number of pages?", 295);
    let read = prompt("Read or not read?", "read");
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    printBookInLibrary();
}

function printBookInLibrary() {
    console.table(myLibrary);
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();