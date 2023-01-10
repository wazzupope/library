const myLibrary = [];

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

console.log(theHobbit.info());