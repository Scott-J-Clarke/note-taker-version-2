const express = require('express');

// An instance of Express to apply middleware and routing:
const app = express();

// Import 'apiroutes.js':
const notesRouter = require('./apiroutes');

app.use('/notes', notesRouter);

module.exports = app;
