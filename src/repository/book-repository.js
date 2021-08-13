import Book from "../model/book.js";

export default class BookRepository {

  constructor(seed = true) {
    this.books = new Map();
    this.index = 0;
    if(seed) {
      [new Book("Lord Of The Rings", 1954), new Book("Harry Potter and the Chamber of Secrets", 1998)]
        .forEach(book => this.add(book.title, book.publicationYear))
    }
  }

  add(title, publicationYear) {
    if(!title) { throw new Error("Invalid input: No bookTitle specified!"); }
    if(!publicationYear) { throw new Error("Invalid input: No publicationYear specified!"); }

    this.books.set(++this.index, new Book(title, publicationYear));
    return this.index;
  }

  get(index) {
    if(!this.books.has(index)) { throw new Error(`Invalid input: Book of index ${index} is not found!`); }
    const { title, publicationYear } = this.books.get(index);
    return { index, title, publicationYear };
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

  getAll() {
    const catalogue = [];
    for (const [key, value] of this.books.entries()) {
      catalogue.push({index: key, title: value.title, publicationYear: value.publicationYear })
    }
    return catalogue;
  }
}