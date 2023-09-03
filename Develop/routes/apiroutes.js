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

// DELETE route for removing an entry from 'api/notes':
notes.delete('api/notes/:id', (req, res) => {
    // Will this read all the notes in 'db.json'?
    let db = JSON.parse(readFromFile('./db/db.json'));
    // Remove a specific note using 'note_id':
    let deleteNotes = db.filter(item => item.note_id !== req.params.note_id);
    // Rewrite notes to 'db.json' without deleted note:
    writeToFile('./db/db.json', JSON.stringify(deleteNotes));
    // db should now be one note shorter:
    res.json(deleteNotes);
});

module.exports = notes;


