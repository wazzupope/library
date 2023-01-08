const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    if (read === "yes") {
      const readStatus = "already read";
    }
    else {
      const readStatus = "not yet read";
    };
    return `${title} by ${author}, ${pages} pages, ${readStatus}.`;
  };
};

function addBookToLibrary() {

};