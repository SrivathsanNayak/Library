let currentBookPointer = 0;

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
    const div = document.createElement("div");
    div.classList.add("book-card");
    document.getElementById("books-container").appendChild(div);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent += myLibrary[currentBookPointer]["title"];
    div.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent += myLibrary[currentBookPointer]["author"];
    div.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent += myLibrary[currentBookPointer]["pages"];
    div.appendChild(pages);

    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent += myLibrary[currentBookPointer]["read"];
    div.appendChild(read);

    currentBookPointer++;
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();