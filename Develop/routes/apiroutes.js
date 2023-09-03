const express = require('express');
const notes = express.Router();

const database = require('../db/db.json');

// Helper functions for reading and writing to the JSON file:
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Will need to set up UUID here:

// When using 'express.Router()' it seems that 'notes.get' has to have '/' in its path:
notes.get('/', (req, res) => res.json(database));

module.exports = notes;



// // Tried GET route structure from Activity 11-04:
// const dataBase = require('..db/db.json');
// notes.get('/notes', (req, res) => res.json(dataBase));

// const app = express();

// // GET route for api:
// // Inside 'notes.get()' should it be '/' or '/api/notes'?
// notes.get('/notes', (req, res) => {
//     console.info(`${req.method} request received for notes.`);

//     readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// app.get('/api/notes', (req, res) => res.json(database));
// notes.get('/api/notes', (req, res) => res.json(database));


// This is a test to see if module.exports is working properly:
// const getName = () => {
//     return 'Scott';
// };
// module.exports = getName;

// These are testing tools to see if this module can access Node.js:
// const PORT = 3001;

// app.listen(PORT, () => 
//     console.info(`Listening at http://localhost:${PORT}`)
// );