import { displayBooksList } from './display.js';
import { create } from './create.js';

export const AddBook = (title, author) => {
  const books = create();
  const newBook = { title: title, author: author };
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooksList();
};
