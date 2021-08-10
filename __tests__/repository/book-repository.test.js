import BookRepository from "../../src/repository/book-repository";
import Book from "../../src/model/book";

describe("Book repository", () => {

  let repository;

  beforeEach(() => {
    repository = new BookRepository();
  });

  describe("Add", () => {
    it("should be able to add books into the repository", () => {
      const index = repository.add("Lord Of The Rings", 1954);

      expect(index).toEqual(1);
    });

    it("should throw error if publicationYear is not defined", () => {
      expect(() => repository.add("Lord Of The Rings")).toThrow("Invalid input: No publicationYear specified!")
    });

    it("should throw error if bookTitle is not defined", () => {
      expect(() => repository.add("", 1945)).toThrow("Invalid input: No bookTitle specified!")
    });
  });

  describe("Get", () => {
    it("should return the book given Book ID", () => {
      repository.add("Lord Of The Rings", 1954);
      repository.add("Harry Potter and the Chamber of Secrets", 1998);

      expect(repository.get(2)).toEqual(new Book("Harry Potter and the Chamber of Secrets", 1998));
    });

    it("should throw error if index is not found", () => {
      expect(() => repository.get(1)).toThrow("Invalid input: Book of index 1 is not found!")
    });
  });

  describe("Update", () => {
    it("should update the book given Book ID", () => {
      repository.add("Lord Of The Rings", 1954);
      repository.update(1, "Lord of the Flies", 1954);

      expect(repository.get(1)).toEqual(new Book("Lord of the Flies", 1954));
    });

    it("should not increment index when book is updated", () => {
      repository.add("Lord Of The Rings", 1954);
      repository.update(1, "Lord of the Flies", 1954);
      repository.add("The Chronicles of Narnia", 1956);

      expect(repository.get(2)).toEqual(new Book("The Chronicles of Narnia", 1956));
    });

    it("should throw error if publicationYear is not defined", () => {
      repository.add("Lord Of The Rings", 1954);

      expect(() => repository.update(1, "Lord Of The Rings")).toThrow("Invalid input: No publicationYear specified!")
    });

    it("should throw error if bookTitle is not defined", () => {
      expect(() => repository.update(1, "", 1945)).toThrow("Invalid input: No bookTitle specified!")
    });

    it("should throw error if index is not found", () => {
      expect(() => repository.update(1, "A Book", 1945)).toThrow("Invalid input: Book of index 1 is not found!")
    });
  });

  describe("Delete", () => {
    it("should successfully delete a book", () => {
      repository.add("Lord Of The Rings", 1954);
      repository.delete(1);

      expect(() => repository.get(1)).toThrow("Invalid input: Book of index 1 is not found!")
    });

    it("should throw error if book is not found", () => {
      expect(() => repository.delete(1)).toThrow("Invalid input: Book of index 1 is not found!");
    });
  })
});