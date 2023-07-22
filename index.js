import { displayBooksList } from "./modules/display.js";
import { AddBook } from "./modules/add.js";
import { dateandtime } from "./modules/dateandtime.js";

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (title !== "" && author !== "") {
    AddBook(title, author);
  }
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  displayBooksList();
});

displayBooksList();
dateandtime();
