import * as repository from "../../src/repository/book-repository";
import Book from "../../src/model/book";

describe("Book repository", () => {
  it("should be able to add books into the repository", () => {
    const index = repository.add(new Book("Lord Of The Rings", 1954));

    expect(index).toEqual(1);
  });

  it("should return the book given Book ID", () => {
  });
});