import * as booksinput from "./modules/booksinput.js";

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title !== "" && author !== "") {
    booksinput.AddBook(title, author);
  }
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  booksinput.displayBooksList();
});
