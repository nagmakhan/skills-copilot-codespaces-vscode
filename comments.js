// Create web server
// 1. Create a web server
// 2. Load the comments.json file
// 3. Create an endpoint /comments
// 4. Send the comments file as response

// 1. Create a web server
const express = require('express');
const server = express();
const port = 3000;

// 2. Load the comments.json file
const comments = require('./comments.json');

// 3. Create an endpoint /comments
server.get('/comments', (req, res) => {
    res.send(comments);
});

// 4. Send the comments file as response
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server using node comments.js
// Open the browser and go to http://localhost:3000/comments
// The comments file is displayed as response
// [
//     {
//         "id": 1,
//         "name": "John",
//         "email": "