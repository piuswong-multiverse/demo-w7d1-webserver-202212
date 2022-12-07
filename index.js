// Make a web server with Express
// hosts static content, same content for all requests, and all users

const express = require('express'); // load express
const app = express(); // Initialize the express app
const port = 3000;

app.use(express.static('public')); // allows express to read the 'public' folder

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});