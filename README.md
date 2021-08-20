# Introduction

This repository contains the boilerplate for a NodeJS project for purposes of our Introductory Express Workshop.

Tech Stack:
- NodeJS
- Javascript

## Getting Started

1. Local setup
    
    To setup the repository locally, run the following script from the base directory. 
    
    After running the script, you will notice as a folder `node_modules` is being generated. This folder contains libraries downloaded by `npm` required by this project. 

    ```
    ./scripts/setup.sh
    ```
   
2. Verify that the application is running
    
    1. To start the application, run the following command:
       ```
       npm start
       ```
   
    1. Now go to `http://localhost:3000`, if you see a `Hello World!` message, you're all set!
   
## Repository Structure

```
express-workshop
|_ node_modules/                # Application dependencies
|_ scripts/                     # Utility scripts
|_ requirements                 # Workshop tasks
|_ src/                         # Source code
|_ __tests__/                   # Tests
|_ postman/                     # Postman configuration
|_ package.json                 # Project properties & minimum dependencies' version
|_ package-lock.json            # Describes exact dependency tree generated
|_ .babelrc
|_ .gitignore
|_ Plan.md
|_ README.md
```
    