import Book from "../model/book";

export default class BookRepository {

  constructor() {
    this.books = new Map();
    this.index = 0;
  }

  add(title, publicationYear) {
    if(!title) { throw new Error("Invalid input: No bookTitle specified!"); }
    if(!publicationYear) { throw new Error("Invalid input: No publicationYear specified!"); }

    this.books.set(++this.index, new Book(title, publicationYear));
    return this.index;
  }

  get(index) {
    if(!this.books.has(index)) { throw new Error(`Invalid input: Book of index ${index} is not found!`); }
    return this.books.get(index);
  }

  update(index, title, publicationYear) {
    if(!title) { throw new Error("Invalid input: No bookTitle specified!"); }
    if(!publicationYear) { throw new Error("Invalid input: No publicationYear specified!"); }
    if(!this.books.has(index)) { throw new Error(`Invalid input: Book of index ${index} is not found!`); }

    this.books.set(index, new Book(title, publicationYear));
    return this.index;
  }

  delete(index) {
    if(!this.books.has(index)) { throw new Error(`Invalid input: Book of index ${index} is not found!`); }

    this.books.delete(index);
  }
}