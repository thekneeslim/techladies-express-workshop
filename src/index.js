import express from "express";
import bookRouter from "./controller/books.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Library Application listening at http://localhost:${port}`)
});