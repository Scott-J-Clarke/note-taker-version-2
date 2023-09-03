const express = require('express');
const notes = express.Router();

// Helper functions for reading and writing to the JSON file:
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Will need to set up UUID here:

// With 'express.Router()' the 'notes.get' request has to have '/' in its path:
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;

// This is a simpler GET request that works:
// notes.get('/', (req, res) => res.json(database));
