const myLibrary = [];

const titleElement = document.querySelector('#title');
const authorElement = document.querySelector('#author');
const pagesElement = document.querySelector('#pages');
const readElement = document.querySelector('#read');
const unreadElement = document.querySelector('#unread');

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    let readStatus = "not yet read"
    if (read === "yes") {
      readStatus = "already read";
    }
    return `${title} by ${author}, ${pages} pages, ${readStatus}.`;
  };
};

function addBookToLibrary(book) {
  myLibrary.push(book);
};

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