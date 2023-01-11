const myLibrary = [];

// DOM Selectors
const titleElement = document.querySelector('#title');
const authorElement = document.querySelector('#author');
const pagesElement = document.querySelector('#pages');
const readElement = document.querySelector('#read');
const unreadElement = document.querySelector('#unread');
const cardGrid = document.querySelector('#cardGrid');

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.readStatus = function() {
    let readOrNot = "Read: No";
    if (read === "yes") {
      readOrNot = "Read: Yes";
    }
    return readOrNot;
  };
};

// Add Book to Library
function addBookToLibrary(book) {
  myLibrary.push(book);
  const bookIndex = myLibrary.length - 1;
  // Create DOM element for card
  cardGrid.appendChild('div');
  cardGrid.lastChild.setAttribute("id", `card${bookIndex}`);
  cardGrid.lastChild.setAttribute("class", "cardBox");
  const card = document.getElementById(`card${bookIndex}`);
  // Create DOM element for title within card
  card.appendChild('h2');
  card.lastChild.setAttribute("class", "cardTitle");
  card.lastChild.textContent = myLibrary[bookIndex].title;
  // Create Dom element for author within card
  card.appendChild('span');
  card.lastChild.setAttribute("class", "cardAuthor");
  card.lastChild.textContent = myLibrary[bookIndex].author;
  // Create DOM element for pages within card
  card.appendChild('span');
  card.lastChild.setAttribute("class", "cardPages");
  card.lastChild.textContent = myLibrary[bookIndex].pages;
  // Create DOM element for read status within card
  card.appendChild('span');
  card.lastChild.setAttribute("class", "cardRead");
  card.lastChild.textContent = myLibrary[bookIndex].readStatus;
  // Create DOM element for remove button within card
  card.appendChild('button');
  card.lastChild.setAttribute("class", "removeButton");
  card.lastChild.textContent = "Remove Book";
};

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

console.log(myLibrary);