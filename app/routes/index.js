const express = require('express');
const app = express();


// Handling a GET request to this file (eg: server.js) from browser
app.get('/' , (req,res) => {                   //Callback function
    res.send('hello express world!');
});

app.get('/auth' , (req,res) => {                   //Callback function
    res.send('Login PAge!');
});



module.exports = app;