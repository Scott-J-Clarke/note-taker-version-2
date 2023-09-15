const express = require('express');
const notes = express.Router();
// Import 'fs' for 'fs.readFileSync' used in writing the DELETE route:
const fs = require('fs');

// Helper functions for reading and writing to the JSON file:
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

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
       id: uuid(), 
     };
     readAndAppend(newNote, './db/db.json');

     // Struture of response inside of 'Insomnia' that tells if new note has been posted:
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

// DELETE route for removing a specific 'id' entry at 'api/notes/:id':
notes.delete('/:id', (req, res) => {
    // 'fs.readFileSync' and 'fs.writeFileSync' are easier to understand.
    // They happen immeidately. They are not reliant on executing a 'promise.'
    let db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
});

module.exports = notes;
