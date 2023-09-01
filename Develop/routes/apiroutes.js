// const express = require('express');
const notes = require('express').Router();

// const app = express();
const PORT = 3001;

const database = require('../db/db.json');

// app.get('/api/notes', (req, res) => res.json(database));

notes.get('/api/notes', (req, res) => res.json(database));

module.exports = notes;

// app.listen(PORT, () => 
//     console.info(`Listening at http://localhost:${PORT}`)
// );


// Import Express.js:
// const notes = require('express').Router();

// Will need to set up UUID here:


// Helper functions for reading and writing to the JSON file:
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


    
// module.exports = notes;



// // Tried GET route structure from Activity 11-04:
// const dataBase = require('..db/db.json');
// notes.get('/notes', (req, res) => res.json(dataBase));



// // GET route for api:
// // Inside 'notes.get()' should it be '/' or '/api/notes'?
// notes.get('/notes', (req, res) => {
//     console.info(`${req.method} request received for notes.`);

//     readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
// });