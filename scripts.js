/* eslint-disable no-plusplus */
const myLibrary = [];
let indexNum = 0;

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.numOfPages = function() {
    return `Pages: ${pages}`;
  };
  this.read = read
  this.readStatus = function() {
    let readOrNot = "Read: No";
    if (read === "yes") {
      readOrNot = "Read: Yes";
    }
    return readOrNot;
  };
  this.index = function() {
    return indexNum;
  };
};

// Determine if radio buttons are marked read or unread
const readFunc = function() {
  const radioButtons = document.getElementsByName("read_status");
  let readValue;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      readValue = radioButtons[i].value;
    }
  };
  return readValue;
};

// Remove book card
function removeCard(event) {
  event.target.parentElement.remove();
};

// Read status button handling
function toggleReadStatus(toggle) {
  if (toggle.target.textContent === "Read") {
    toggle.target.textContent = "Unread";
    toggle.target.className = "toggleUnread";
  }
  else {
    toggle.target.textContent = "Read";
    toggle.target.className = "toggleRead";
  };
};

// Add Book to Library
const cardGrid = document.querySelector('#cardGrid');
function addBookToLibrary(book) {
  myLibrary.push(book);
  // Create DOM element for card
  cardGrid.appendChild(document.createElement('div'));
  cardGrid.lastChild.setAttribute("id", `card${indexNum}`);
  cardGrid.lastChild.setAttribute("class", "cardBox");
  const card = document.getElementById(`card${indexNum}`);
  // Create DOM element for title within card
  card.appendChild(document.createElement('h2'));
  card.lastChild.setAttribute("class", "cardTitle");
  card.lastChild.textContent = myLibrary[indexNum].title;
  // Create Dom element for author within card
  card.appendChild(document.createElement('span'));
  card.lastChild.setAttribute("class", "cardAuthor");
  card.lastChild.textContent = myLibrary[indexNum].author;
  // Create DOM element for pages within card
  card.appendChild(document.createElement('span'));
  card.lastChild.setAttribute("class", "cardPages");
  card.lastChild.textContent = myLibrary[indexNum].numOfPages();
  // Create DOM element for button to change read status with default of Unread
  card.appendChild(document.createElement('button'));
  card.lastChild.setAttribute("id", `readToggle${indexNum}`);
  if (book.readStatus() === "Read: Yes") {
    card.lastChild.textContent = "Read";
    card.lastChild.setAttribute("class", "toggleRead");
  }
  else if (readFunc() === "read") {
    card.lastChild.textContent = "Read";
    card.lastChild.setAttribute("class", "toggleRead");
  }
  else {
    card.lastChild.textContent = "Unread";
    card.lastChild.setAttribute("class", "toggleUnread");
  };
  // Add event listener to read toggle button
  const thisReadToggleButton = document.querySelector(`#readToggle${indexNum}`);
  thisReadToggleButton.addEventListener('click', toggleReadStatus);
  // Create DOM element for remove button within card
  card.appendChild(document.createElement('button'));
  card.lastChild.setAttribute("class", "removeButton");
  card.lastChild.setAttribute("id", `removeButton${indexNum}`);
  card.lastChild.textContent = "Remove Book";
  // Add event listener to remove button
  const thisRemoveButton = document.getElementById(`removeButton${indexNum}`);
  thisRemoveButton.addEventListener('click', removeCard);
  // Increment index number
  indexNum += 1;
};

// Submit button handling
const submit = document.querySelector('#submit');
function submitAction(event) {
  event.preventDefault();
  const newBookTitle = document.getElementById("title").value;
  const newBookAuthor = document.getElementById("author").value;
  const newBookPages = document.getElementById("pages").value;
  const newBookRead = readFunc();
  const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  addBookToLibrary(newBook);
};
submit.addEventListener("click", submitAction);

// Book Objects
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "yes");
const theNameOfTheWind = new Book("The Name of The Wind", "Patrick Rothfuss", 662, "yes");
const theLiesOfLockeLamora = new Book("The Lies of Locke Lamora", "Scott Lynch", 499, "yes");
const halfAKing = new Book("Half A King", "Joe Abercrombie", 352, "yes");
const theWiseMansFear = new Book("The Wise Man's Fear", "Patrick Rothfuss", 1120, "yes");
const doorsOfStone = new Book("Doors of Stone", "Patrick Rothfuss", 0, "no");
const aGameOfThrones = new Book("A Game of Thrones", "George R.R. Martin", 694, "yes");
const theWindsofWinter = new Book("The Winds of Winter", "George R.R. Martin", 0, "no");

addBookToLibrary(theHobbit);
addBookToLibrary(theNameOfTheWind);
addBookToLibrary(theLiesOfLockeLamora);
addBookToLibrary(halfAKing);
addBookToLibrary(theWiseMansFear);
addBookToLibrary(doorsOfStone);
addBookToLibrary(aGameOfThrones);
addBookToLibrary(theWindsofWinter);
