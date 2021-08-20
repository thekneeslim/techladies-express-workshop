# Task 3
Introduce a `PUT` endpoint to route `/books/:id`.

### Use Case
As a librarian,\
I want to be able to amend an existing book's details,\
So that I update the catalogue when required.

### Requirement

1.  Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `title` and `publicationYear`,\
    Then a successful update occurs and the API should return the book details with it's index.
    
    ```
    // Exmaple PUT body
    {
      "title": "The Chronicles of Narnia",
      "publicationYear": 1950
    }
    ```
    ```
    // Example return body
    {
      "index": 1,
      "title": "The Chronicles of Narnia",
      "publicationYear": 1950
    }
    ```

1.  Given a book does not exists in the catalogue,\
    When a `PUT` request is made to `/books/:id`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Example return body
    {
      "status": 404,
      "error": "Book does not exist!"
    }
    ```

#

---

### Bonus Requirement

1.  Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `title` but no `publicationYear`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Exmaple PUT body
    {
      "title": "The Chronicles of Narnia",
    }
    ```
    ```
    // Example return body
    {
      "status": 400,
      "error": "Invalid publicationYear!"
    }
    ```

1.  Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `publicationYear` but no `title`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Exmaple PUT body
    {
      "title": "The Chronicles of Narnia",
    }
    ```
    ```
    // Example return body
    {
      "status": 400,
      "error": "Invalid title!"
    }
    ```