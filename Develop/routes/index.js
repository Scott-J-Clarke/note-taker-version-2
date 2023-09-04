// Import Express.js:
const express = require('express');

// Import file that has a route:
const notesRouter = require('./apiroutes');
const htmlRouter = require('./htmlroutes');

// An instance of express to apply the middleware and routing:
const app = express();

app.use('/notes', notesRouter);
app.use('/html', htmlRouter);

module.exports = app;
