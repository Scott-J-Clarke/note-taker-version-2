const express = require('express');
// Try using 'express.Router()' rather than 'express()':
// const html = express.Router();
const app = express();

// Use 'path' to write file paths:
const path = require('path');

// GET route is returning '/notes.html' part of Note Taker application:
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
); 

// Original draft of 'index.html' GET request:
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

const PORT = 3001;

app.listen(PORT, () => 
    console.log(`Note Taker application listening at http://localhost:${PORT}`)
);

// module.exports = app;