# Task 2
Introduce a `POST` endpoint to route `/books`.

### Use Case
As a librarian,\
I want to be able to add a book to the catalogue,\
So that I can increase the library's selection of books.

### Requirement
Given a new book with title and publicationYear is present,\
When a `POST` request is made to `/books`,\
Then a successful addition occurs and the API should return the book details with it's index.

```
// Exmaple POST body
{
  "title": "The Chronicles of Narnia",
  "publicationYear": 1950
}

// Example return body
{
  "index": 1,
  "title": "The Chronicles of Narnia",
  "publicationYear": 1950
}
```
Given a new book with `publicationYear` but no `title` is given,\
When a `POST` request is made to `/books`,\
Then the API should return an error message with status `400`.
    
```
// Exmaple POST body
{
  "publicationYear": 1950
}

// Example return body
{
  "status": 400,
  "error": "Invalid title!"
}
```
Given a new book with `title` but no `publicationYear` is given,\
When a `POST` request is made to `/books`,\
Then the API should return an error message with status `400`.
    
```
// Exmaple POST body
{
  "title": "The Chronicles of Narnia"
}

// Example return body
{
  "status": 400,
  "error": "Invalid publicationYear!"
}
```
