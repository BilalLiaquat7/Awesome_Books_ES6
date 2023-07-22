import { remove } from './remove.js';
import { create } from './create.js';

export const displayBooksList = () => {
  const listSection = document.getElementById('list');
  const allBooks = create();
  listSection.innerHTML = '';
  if (allBooks.length > 0) {
    for (let i = 0; i < allBooks.length; i += 1) {
      const oneBook = document.createElement('div');
      oneBook.innerHTML = `
          <span>'${allBooks[i].title}'</span>
          <span>'${allBooks[i].author}'</span>`;

      const btnRemove = document.createElement('button');
      btnRemove.type = 'button';
      btnRemove.textContent = 'Remove';
      btnRemove.addEventListener('click', () => remove(i));
      oneBook.append(btnRemove);
      listSection.append(oneBook);
    }
  }
};
