import express from "express";
import BookRepository from "./repository/book-repository.js";

const app = express();
const port = 3000;

const booksRepository = new BookRepository();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  res.json(booksRepository.getAll());
});

app.listen(port, () => {
  console.log(`Library Application listening at http://localhost:${port}`)
});