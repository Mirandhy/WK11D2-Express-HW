const express = require('express');
const app = express( );
const port = 3000;

app.get('/greeting/:name', (req, res) =>{
    res.send(`Wow! Hello there, ${req.params.name}`);
    
    });

app.get('/greeting', (req, res) => {
    res.send(`Hello, stranger`);
});





app.listen(port, () => {
    console.log("The Listening on http://localhost:3000")
})