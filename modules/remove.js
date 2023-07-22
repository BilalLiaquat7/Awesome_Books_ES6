import { displayBooksList } from './display.js';

// eslint-disable-next-line no-unused-vars
export const remove = (index) => {
  const listSection = document.getElementById('list');
  const allBooks = JSON.parse(localStorage.getItem('books'));
  allBooks.splice(index, 1);
  const bookData = JSON.stringify(allBooks);
  localStorage.setItem('books', bookData);
  listSection.innerHTML = '';
  displayBooksList();
};
