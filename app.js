/*
//Variable to store current book number
let currentBookPointer = 0;
let isFormAdded = false;

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
    //pages.setAttribute("min", "0");
    pages.setAttribute("placeholder", "No. of pages");

    let read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("id", "form-read");
    read.setAttribute("name", "form-read");
    read.setAttribute("checked", "checked");

    let labelRead = document.createElement("label");
    labelRead.setAttribute("for", "form-read");
    labelRead.textContent = "Book read";

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Submit book");

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

    if (!isFormAdded) {
        document.getElementById("form-container").appendChild(form);
        isFormAdded = true;
    }

    //Function for form validation
    submitButton.addEventListener("click", () => {
        let flag = true;
        if (document.getElementById("form-title").value == "") {
            alert("Please enter a valid title");
            flag = false;
        }
        if (document.getElementById("form-author").value == "" || !(document.getElementById("form-author").value.match(/[a-zA-Z]/))) {
            alert("Please enter a valid name");
            flag = false;
        }
        if (document.getElementById("form-pages").value < 1 || document.getElementById("form-pages").value % 1 !== 0 || document.getElementById("form-pages").value == "") {
            alert("Please enter a valid number");
            flag = false;
        }
        if (flag) {
            addBookToLibrary();
            document.getElementById("form-container").removeChild(form);
            isFormAdded = false;
        }
    });
}

//Function to add book object to library
function addBookToLibrary() {
    let title = document.getElementById("form-title").value;
    let author = document.getElementById("form-author").value;
    let pages = document.getElementById("form-pages").value;
    let read = (document.getElementById("form-read").checked ? "Read" : "Not read");
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    for (let i = currentBookPointer; i < myLibrary.length; i++) {
        console.log(myLibrary[i]["title"]);
        console.log(myLibrary[i]["author"]);
        console.log(myLibrary[i]["pages"]);
        console.log(myLibrary[i]["read"]);
    }
    printBookInLibrary();
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
*/

/*
    const removeButton = document.createElement("input");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("value", "Remove book");
    div.appendChild(removeButton);
*/

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

document.getElementById("new-book").addEventListener("click", formOn);
document.getElementById("submit-book").addEventListener("click", formOff);

function formOn() {
    document.getElementById("form-container").style.display = "block";
}

function formOff() {
    let flag = true;
    if (document.getElementById("form-title").value == "") {
        alert("Please enter a valid title");
        flag = false;
    }
    if (document.getElementById("form-author").value == "" || !(document.getElementById("form-author").value.match(/[a-zA-Z]/))) {
        alert("Please enter a valid name");
        flag = false;
    }
    if (document.getElementById("form-pages").value < 1 || document.getElementById("form-pages").value % 1 !== 0 || document.getElementById("form-pages").value == "") {
        alert("Please enter a valid number");
        flag = false;
    }
    if (flag) {
        addBookToLibrary();
        document.querySelector("form").reset();
        document.getElementById("form-container").style.display = "none";
    }
}

function addBookToLibrary() {
    let title = document.getElementById("form-title").value;
    let author = document.getElementById("form-author").value;
    let pages = document.getElementById("form-pages").value;
    let read = (document.getElementById("form-read").checked ? "Read" : "Not read");
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    printBook();
}

function printBook() {
    const divCard = document.createElement("div");
    const titleCard = document.createElement("h3");
    const authorCard = document.createElement("h4");
    const pagesCard = document.createElement("h4");
    const readCard = document.createElement("h4");

    divCard.classList.add("book-card");
    titleCard.classList.add("card-heading");
    authorCard.classList.add("card-heading");
    pagesCard.classList.add("card-heading");
    readCard.classList.add("card-heading");

    for (let i = 0; i < myLibrary.length; i++) {
        titleCard.textContent = myLibrary[i]["title"];
        authorCard.textContent = myLibrary[i]["author"];
        pagesCard.textContent = myLibrary[i]["pages"];
        readCard.textContent = myLibrary[i]["read"];

        document.getElementById("books-container").appendChild(divCard);
        divCard.appendChild(titleCard);
        divCard.appendChild(authorCard);
        divCard.appendChild(pagesCard);
        divCard.appendChild(readCard);
    }
}

//Add read toggle in book card
//Add delete button with alert in book card
//Add rating system in library
//Add book number
//Allow dragging & reordering of book cards
//Allow creation of folders/directories
//Add dark mode
//Add cancel button in form
//Check overflow inside form