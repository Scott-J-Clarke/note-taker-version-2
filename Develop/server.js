// Does Express.js need to be imported to 'server.js'?
const express = require('express');

// Import 'index.js' which collects 'apiroutes.js' and 'htmlroutes.js':
const api = require('./routes/index');

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

// Send all requests that start with '/api' to the 'index.js' in the 'routes' folder:
app.use('/api', api);

app.listen(PORT, () => 
    console.log(`Note Taker application listening at http://localhost:${PORT}`)
);
