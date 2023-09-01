// Import Express.js:
const notes = require('express').Router();

// Will need to set up UUID here:


// Helper functions for reading and writing to the JSON file:
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


// GET route for api:
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for /api/notes.`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});