import Book from "../model/book";

const books = new Map();
let index = 0;

const add = (bookName, publicationYear) => {
  books.add(++index, new Book(bookName, publicationYear));
  return index;
};

export const repository = {
  add: (bookName, publicationYear) => add(bookName, publicationYear)
};