# Task 1

Introduce a `GET` endpoint to route `/books`.
   
### Use Case
As a librarian,\
I want to be able to retrieve the list of books,\
So that I know what selection of books the library has.

### Requirement

1.  Given the library has a selection of books,\
    When I hit `/books`,\
    Then I should see the full list of all available books.
    
    ```
    // Example return body
    [{
      "index": 1,
      "title": "The Lord Of The Rings",
      "publicationYear": 1954
    },
    {
      "index": 2,
      "title": "The Chronicles of Narnia",
      "publicationYear": 1950
    }]
    ```