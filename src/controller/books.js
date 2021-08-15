import { Router } from "express"
import BookRepository from "../repository/book-repository.js";

const bookRouter = new Router();
const booksRepository = new BookRepository();

bookRouter.get('/', (req, res) => {
  res.json(booksRepository.getAll());
});

bookRouter.post('/', (req, res) => {
  const payload = req.body;
  try {
    const index = booksRepository.add(payload.title, payload.publicationYear);
    res.json(booksRepository.get(index));
  } catch (e) {
    const statusCode = getErrorStatusCode(e);
    res.status(statusCode).json({ status: statusCode, error: e.message });
  }
});

bookRouter.put('/:id', (req, res) => {
  const payload = req.body;
  const index = parseInt(req.params.id);
  try {
    booksRepository.update(index, payload.title, payload.publicationYear);
    res.json(booksRepository.get(index));
  } catch (e) {
    const statusCode = getErrorStatusCode(e);
    res.status(statusCode).json({ status: statusCode, error: e.message });
  }
});

bookRouter.delete('/:id', (req, res) => {
  const index = parseInt(req.params.id);
  try {
    booksRepository.delete(index);
    res.status(204).send();
  } catch (e) {
    const statusCode = getErrorStatusCode(e);
    res.status(statusCode).json({ status: statusCode, error: e.message });
  }
});

const getErrorStatusCode = (e) => {
  return e.message.includes("Book of index") ? 404 : 400;
};
export default bookRouter;