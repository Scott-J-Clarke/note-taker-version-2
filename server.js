const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware that lets user access 'public' folder through browser:
app.use(express.static('public'));
// Middleware for JSON or urlencoded GET, POST, etc. requests:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to 'index.js', which is the route to 'apiroutes.js' and 'htmlroutes.js':
const api = require('./Develop/routes/index');

// GET, POST, and DELETE requests that start with '/api' are routed to 'index.js':
app.use('/api', api);

const path = require('path');

//It seems that '/notes' has to come before '*' in VS Code or the wildcard route will always be accessed first :
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`Note Taker application listening at http://localhost:${PORT}`)
);