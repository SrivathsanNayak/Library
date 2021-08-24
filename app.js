//Variable to store current book number
let currentBookPointer = 0;

//Array to store new book objects
let myLibrary = [];

document.getElementById("new-book").addEventListener("click", bookDetailsForm);

//Constructor function to create new book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Function to add book object to library
function addBookToLibrary() {
    let title = document.getElementById("form-title").value;
    let author = document.getElementById("form-author").value;
    let pages = document.getElementById("form-pages").value;
    let read = document.getElementById("form-read").value;
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    printBookInLibrary();
}

//Function to create form dynamically
function bookDetailsForm() {
    let br = document.createElement("br");
    let form = document.createElement("form");

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "form-title");
    title.setAttribute("name", "form-title");
    title.setAttribute("placeholder", "Title of Book");

    let author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("id", "form-author");
    author.setAttribute("name", "form-author");
    author.setAttribute("placeholder", "Name of Author");

    let pages = document.createElement("input");
    pages.setAttribute("type", "number");
    pages.setAttribute("id", "form-pages");
    pages.setAttribute("name", "form-pages");
    pages.setAttribute("min", "0");
    pages.setAttribute("placeholder", "No. of pages");

    let read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("id", "form-read");
    read.setAttribute("name", "form-read");

    let labelRead = document.createElement("label");
    labelRead.setAttribute("for", "form-read");
    labelRead.textContent = "Book read";

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Submit");

    form.appendChild(title);
    form.appendChild(br.cloneNode());
    form.appendChild(author);
    form.appendChild(br.cloneNode());
    form.appendChild(pages);
    form.appendChild(br.cloneNode());
    form.appendChild(read);
    form.appendChild(labelRead);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    form.appendChild(submitButton);
    document.getElementById("form-container").appendChild(form);

    submitButton.addEventListener("click", () => {
        //document.getElementById("form-container").style.display = "none";
        addBookToLibrary();
        document.getElementById("form-container").removeChild(form);
    });
}

//Function to add book card in webpage
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

//Add rating system in library
//Allow dragging & reordering of book cards
//Allow creation of folders/directories
//Add dark mode
//Check overflow inside form