export const create = () => {
  if (localStorage.getItem('books') == null) {
    localStorage.setItem('books', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('books'));
};
