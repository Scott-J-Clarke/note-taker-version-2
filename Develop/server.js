// Does Express.js need to be imported to 'server.js'?
const express = require('express');

// Import 'index.js' which collects 'apiroutes.js' and 'htmlroutes.js':
const api = require('../Develop/routes/apiroutes');

// Initialize an instance of Express.js:
const app = express();

// Specify port Express.js server will run on (for Heroku or localhost):
const PORT = process.env.PORT || 3001;

// Middleware for the static 'public' folder:
app.use(express.static('public'));

// Middleware for parsing JSON:
app.use(express.json());

// Middleware for urlencoded form data:
app.use(express.urlencoded({ extended: true }));

// Use middleware on GET requests for 'api/notes'?
app.use('/api/notes', api);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);