// Import Express.js:
const express = require('express');

// Import npm package 'path' to resolve path of files located on the server:
const path = require('path');

// Initialize an instance of Express.js:
const app = express();

// Specify port Express.js server will run on (for Heroku or localhost):
const PORT = process.env.PORT || 3001;

// Middleware for the static 'public' folder:
app.use(express.static('public'));

// Middleware for parsing JSON:
app.use(express.json());

// Middleware for urlencoded form data:
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);