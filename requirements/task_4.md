# Task 4

Introduce a `DELETE` endpoint to route `/books/:id` 

#### Use Case
As a librarian,\
I want to be able to delete a book from the catalogue,\
So that I update the catalogue when required.

#### Requirement
1.  Given a book already exists in the catalogue,\
    When a `DELETE` request is made to `/books/:id`,\
    Then a successful delete occurs and the API should return `204`.

1.  Given a book does not exists in the catalogue,\
    When a `DELETE` request is made to `/books/:id`,\
    Then an unsuccessful deletion occurs and the API should return an error message.
    
    ```
    // Example return body
    {
      "status": 404,
      "error": "Book does not exist!"
    }
    ```