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
    const readToggle = document.createElement("button");

    divCard.classList.add("book-card");
    titleCard.classList.add("card-heading");
    authorCard.classList.add("card-heading");
    pagesCard.classList.add("card-heading");

    for (let i = 0; i < myLibrary.length; i++) {
        titleCard.textContent = myLibrary[i]["title"];
        authorCard.textContent = myLibrary[i]["author"];
        pagesCard.textContent = myLibrary[i]["pages"];
        readToggle.textContent = myLibrary[i]["read"];

        document.getElementById("books-container").appendChild(divCard);
        divCard.appendChild(titleCard);
        divCard.appendChild(authorCard);
        divCard.appendChild(pagesCard);
        divCard.appendChild(readToggle);
    }
}

//Add read toggle in book card
//Add delete button with alert in book card
//Add rating system in library or favourites
//Add book number
//Allow dragging & reordering of book cards
//Allow creation of folders/directories
//Add dark mode
//Add cancel button in form
//Check overflow inside form