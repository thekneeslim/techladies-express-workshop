# Introduction

For the purpose of this workshop, we will be introducing you to the fundementals of a Server, APIs, and how you can go about implementing it using NodeJS & Express.

It might seem daunting to you, but worry not, we will get through this together!

## Recap

1. Server
1. APIs

## Today's Requirement

This repository contains a simple Library backend application. Currently, We have an express server setup exposing a `GET` request at `http://localhost:3000`

1. Introduce a `GET` endpoint to route `/books`
   
    #### Use Case
    As a librarian,\
    I want to be able to retrieve the list of books,\
    So that I know what selection of books the library has.
   
    #### Requirement
    Given the library has a selection of books,\
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
   
1. Introduce a `POST` endpoint to route `/books`

    #### Use Case
    As a librarian,\
    I want to be able to add a book to the catalogue,\
    So that I can increase the library's selection of books.
   
    #### Requirement
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
   
1. Introduce a `PUT` endpoint to route `/books/:id`

    #### Use Case
    As a librarian,\
    I want to be able to amend an existing book's details,\
    So that I update the catalogue when required.
   
    #### Requirement
    Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `title` and `publicationYear`,\
    Then a successful update occurs and the API should return the book details with it's index.
    
    ```
    // Exmaple PUT body
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
    
    Given a book does not exists in the catalogue,\
    When a `PUT` request is made to `/books/:id`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Example return body
    {
      "status": 404,
      "error": "Book does not exist!"
    }
    ```
    Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `title` but no `publicationYear`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Exmaple PUT body
    {
      "title": "The Chronicles of Narnia",
    }
    
    // Example return body
    {
      "status": 400,
      "error": "Invalid publicationYear!"
    }
    ```
    Given a book already exists in the catalogue,\
    When a `PUT` request is made to `/books/:id` with `publicationYear` but no `title`,\
    Then an unsuccessful update occurs and the API should return an error message.
    
    ```
    // Exmaple PUT body
    {
      "title": "The Chronicles of Narnia",
    }
    
    // Example return body
    {
      "status": 400,
      "error": "Invalid title!"
    }
    ```
1. Introduce a `DELETE` endpoint to route `/books/:id` 

    #### Use Case
    As a librarian,\
    I want to be able to delete a book from the catalogue,\
    So that I update the catalogue when required.
   
    #### Requirement
    Given a book already exists in the catalogue,\
    When a `DELETE` request is made to `/books/:id`,\
    Then a successful delete occurs and the API should return `204`.
    
    Given a book does not exists in the catalogue,\
    When a `DELETE` request is made to `/books/:id`,\
    Then an unsuccessful deletion occurs and the API should return an error message.
    
    ```
    // Example return body
    {
      "status": 404,
      "error": "Book does not exist!"
    }
    ```