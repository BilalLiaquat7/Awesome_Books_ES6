class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// export const initDB = () => {
//   if (localStorage.getItem("books") === null) {
//     localStorage.setItem("books", JSON.stringify([]));
//   }
//   const listSection = document.getElementById("list");
//   const books = JSON.parse(localStorage.getItem("books"));
// };

export const create = () => {
  if (localStorage.getItem("books") == null) {
    localStorage.setItem("books", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("books"));
};
export const displayBooksList = () => {
  const listSection = document.getElementById("list");
  const allBooks = create();
  listSection.innerHTML = "";
  if (allBooks.length > 0) {
    for (let i = 0; i < allBooks.length; i += 1) {
      const oneBook = document.createElement("div");
      oneBook.innerHTML = `
        <span>"${allBooks[i].title}"</span>
        <span>"${allBooks[i].author}"</span>
        <button type="button" onclick="remove(${i})">Remove</button>`;

      listSection.append(oneBook);
    }
  }
};

export const AddBook = (title, author) => {
  const books = create();
  const newBook = new Book(title, author);
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  displayBooksList();
};

// eslint-disable-next-line no-unused-vars
export const remove = (index) => {
  const listSection = document.getElementById("list");
  const allBooks = JSON.parse(localStorage.getItem("books"));
  allBooks.splice(index, 1);
  const bookData = JSON.stringify(allBooks);
  localStorage.setItem("books", bookData);
  listSection.innerHTML = "";
  displayBooksList();
};

displayBooksList();
