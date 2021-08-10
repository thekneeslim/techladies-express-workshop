export default class Book {

  constructor(title, publicationYear) {
    this.title = title;
    this.publicationYear = publicationYear;
  }

  title() {
    return this.title;
  }

  publicationYear() {
    return this.publicationYear;
  }
}