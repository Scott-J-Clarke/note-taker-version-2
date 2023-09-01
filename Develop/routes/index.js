const express = require('express');

// Import files that have routes:
const notesRouter = require('./apiroutes');
// Import htmlroutes.js:

// Create an instance of express to apply the middleware and routing:
const app = express();

app.use('/apiroutes', notesRouter);
// Create second 'app.use()' for htmlroutes:

module.exports = app;
