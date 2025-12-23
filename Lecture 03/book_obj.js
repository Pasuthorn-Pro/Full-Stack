const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
checkOut: function() {
        this.isAvailable = false;
},
checkIn: function() {
        this.isAvailable = true;
}
};
console.log(typeof book);
console.log(book);
console.log("Title: ", book.title);
console.log("Is Available: ", book.isAvailable);
book.checkIn();
console.log("Is Available after checkIn: ", book.isAvailable);
book.checkOut();
console.log("Is Available after checkOut: ", book.isAvailable);