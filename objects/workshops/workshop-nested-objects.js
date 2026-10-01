// Workshop: Nested Objects
// Practice working with objects that contain other objects and arrays.

const library = {
  name: "City Library",
  address: {
    street: "123 Main St",
    city: "Springfield",
  },
  books: [
    { title: "1984", author: "George Orwell", checkedOut: false },
    { title: "Dune", author: "Frank Herbert", checkedOut: true },
  ],
};

function getAvailableBooks(lib) {
  return lib.books.filter((book) => !book.checkedOut).map((book) => book.title);
}

console.log(getAvailableBooks(library)); // ["1984"]
console.log(library.address.city); // Springfield

library.books.push({ title: "Brave New World", author: "Aldous Huxley", checkedOut: false });
console.log(getAvailableBooks(library)); // ["1984", "Brave New World"]

module.exports = { library, getAvailableBooks };
