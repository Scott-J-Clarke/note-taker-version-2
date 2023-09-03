const express = require('express');
const notes = express.Router();

// Helper functions for reading and writing to the JSON file:
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Will need to set up UUID here:
const uuid = require('../helpers/uuid');

// GET route for retrieving from '/api/notes':
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for writing to '/api/notes':
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    // Checks that the new note has a title and text:
    if (title && text) {
    const newNote = { 
       title,
       text,
       note_id: uuid(), 
     };
     readAndAppend(newNote, './db/db.json');

     const response = {
        status: 'success',
        body: newNote,
     };

     // Response inside of 'Insomnia' to tell if new note was posted or not:
     res.json(response);
    } else {
        res.json('Error in posting new note.')
    }
});

module.exports = notes;

// This is a simpler GET request that works:
// notes.get('/', (req, res) => res.json(database));
