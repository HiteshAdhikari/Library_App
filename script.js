let add_option = document.querySelector("#add_option");
let form = document.querySelector(".form");
let text = document.querySelector("#text");
let author = document.querySelector("#Author");
let pages = document.querySelector("#Pages");
let check = document.querySelector("#Checkbox");

function chg_display() {
  form.classList.toggle("status");
  form.classList.toggle("myStyle");
}
function resetting() {
  text.value = "";
  author.value = "";
  pages.value = "";
  check.checked = null;
}

// Adding logic
let checkbox = document.querySelector("#Checkbox");
let form_card = document.querySelector("#form_card");
let btn_submit = document.querySelector("#btn-submit");

let myLibrary = [];

class Book {
  constructor(nameValue, author, page, valueCheck) {
    this.nameValue = nameValue;
    this.author = author;
    this.page = page;
    this.valueCheck = valueCheck ? "Read" : "Not read";
  }
  addBookToLibrary() {
    myLibrary.unshift(this);
  }
}

function remove__card(i) {
  myLibrary.splice(i, 1);
  bookDisplay();
}

function changeColor(string) {
  if (string == "Not read") {
    return "rgb(255, 2, 2)";
  } else if (string == "Read") {
    return "rgb(61, 212, 63)";
  }
}

function readOrnot(i) {
  const obj = document.getElementById(i);
  if (obj.textContent == "Read") {
    obj.textContent = "Not read";
    obj.style.backgroundColor = "rgb(255, 2, 2)";
    const book = myLibrary[i];
    book.valueCheck = "Not read";
  } else {
    obj.textContent = "Read";
    obj.style.backgroundColor = "rgb(61, 212, 63)";
    const book = myLibrary[i];
    book.valueCheck = "Read";
  }
}

function bookDisplay() {
  const cardContainer = document.querySelector(".wrap");
  cardContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const cards = document.createElement("div");
    cards.innerHTML = "";
    cards.classList.add("card");
    const set_color = changeColor(book.valueCheck);
    cards.innerHTML = `
    <div id="flex_card">
    <p>Name :</p>
    <p class="label_name">${book.nameValue}</p>
  </div>
  <div id="flex_card">
    <p>Author :</p>
    <p class="label_author">${book.author}</p>
  </div>
  <div id="flex_card">
    <p>Pages :</p>
    <p class="label_pages">${book.page}</p>
  </div>
  <div class="card_btn flex__modify">
    <button  id="${i}" class="btn_card" style ="background-color: ${set_color}" onclick="readOrnot(${i})">${book.valueCheck}</button>
    <button class="btn_card" onclick="remove__card(${i})">Remove</button>
  </div>`;
    cardContainer.appendChild(cards);
  }
}

function run() {
  const nameValue = document.querySelector("#text").value;
  const author = document.getElementById("Author").value;
  const page = document.getElementById("Pages").value;
  const valueCheck = document.querySelector("#Checkbox").checked;
  const newBook = new Book(nameValue, author, page, valueCheck);
  newBook.addBookToLibrary();
  bookDisplay();
  resetting();
}
