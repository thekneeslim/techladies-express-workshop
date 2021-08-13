import express from "express";
import BookRepository from "./repository/book-repository.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const booksRepository = new BookRepository();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/books', (req, res) => {
  res.json(booksRepository.getAll());
});

app.post('/books', (req, res) => {
  const payload = req.body;
  try {
    const index = booksRepository.add(payload.title, payload.publicationYear);
    res.json(booksRepository.get(index));
  } catch (e) {
    const statusCode = getErrorStatusCode(e);
    res.status(statusCode).json({ status: statusCode, error: e.message });
  }
});

const getErrorStatusCode = (e) => {
  return e.message.contains("Book of index") ? 404 : 400;
};

app.listen(port, () => {
  console.log(`Library Application listening at http://localhost:${port}`)
});