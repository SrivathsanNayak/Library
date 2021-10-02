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
        alert("Please enter a valid book title");
        flag = false;
    }
    if (document.getElementById("form-author").value == "" || !(document.getElementById("form-author").value.match(/[a-zA-Z]/))) {
        alert("Please enter a valid author name");
        flag = false;
    }
    if (document.getElementById("form-pages").value < 1 || document.getElementById("form-pages").value % 1 !== 0 || document.getElementById("form-pages").value == "") {
        alert("Please enter a valid number of pages");
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
    let read = (document.getElementById("form-read").checked ? "Read" : "Unread");
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    populateStorage();
    printBook();
}

function createCard(title, author, pages, read, deleted) {
    const divCard = document.createElement("div");
    const titleCard = document.createElement("h3");
    const authorCard = document.createElement("h4");
    const pagesCard = document.createElement("h4");
    const readToggle = document.createElement("button");
    const deleteButton = document.createElement("button");

    titleCard.textContent = "Title: "+ title;
    authorCard.textContent = "Author: " + author;
    pagesCard.textContent = "Pages: " + pages;
    readToggle.textContent = read;
    deleteButton.textContent = "DELETE";

    readToggle.setAttribute("title", "Mark book as read or unread");
    deleteButton.setAttribute("title", "Remove book from library");

    divCard.classList.add("book-card");
    titleCard.classList.add("card-heading");
    authorCard.classList.add("card-heading");
    pagesCard.classList.add("card-heading");
    deleteButton.classList.add("delete-button");

    if (readToggle.textContent == "Read") {
        readToggle.classList.add("read-button");
    } else {
        readToggle.classList.add("unread-button");
    }

    document.getElementById("books-container").appendChild(divCard);
    divCard.appendChild(titleCard);
    divCard.appendChild(authorCard);
    divCard.appendChild(pagesCard);
    divCard.appendChild(readToggle);
    divCard.appendChild(deleteButton);

    readToggle.addEventListener("click", changeRead);
    deleteButton.addEventListener("click", deleteBook);

    function changeRead() {
        this.textContent = (this.textContent == "Read") ? "Unread" : "Read";

        //Change read value in array using array.find()
        let book = myLibrary.find(o => (o.title === title && o.author === author && o.pages === pages));
        let index = myLibrary.indexOf(book);
        myLibrary[index] = { title, author, pages, read: this.textContent };
        populateStorage();
        printBook();
    }

    function deleteBook() {
        if (confirm("Are you sure you want to delete \"" + title + "\"")) {
            let book = myLibrary.find(o => (o.title === title && o.author === author && o.pages === pages));
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        }
        populateStorage();
        printBook();
    }
}

function printBook() {
    //Fresh render of book cards
    while (document.getElementById("books-container").firstChild) {
        document.getElementById("books-container").textContent = '';
    }

    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i]["title"], myLibrary[i]["author"], myLibrary[i]["pages"], myLibrary[i]["read"], false);
    }
}

//To store library array of books in localStorage
function populateStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

//To check if library array available in localStorage
function restoreLibrary() {
    if (!localStorage.myLibrary) {
        printBook();
    } else {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
        printBook();
    }
}

restoreLibrary();