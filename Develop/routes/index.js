// Import Express.js:
const express = require('express');

// Import file that has a route:
const notesRouter = require('./apiroutes');

// Import htmlroutes.js:

// Create an instance of express to apply the middleware and routing:
const app = express();

app.use('/notes', notesRouter);

module.exports = app;

// Create second 'app.use()' for htmlroutes:

// Everything below this line is for testing.
// Want to see if 'apiroutes.js' can be sent to 'index.js'

// Use middleware on GET requests for 'api/notes'?
// app.use('/api/notes', notes);


// This is a test to see if module.exports is working properly:

// const PORT = 3001;

// app.listen(PORT, () => 
//     console.log(`App listening at http://localhost:${PORT}`)
// );
