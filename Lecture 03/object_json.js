const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(typeof bookJSON);

const receivedBook = JSON.parse(bookJSON);
console.log(receivedBook);
console.log(typeof receivedBook);
console.log(receivedBook.title);