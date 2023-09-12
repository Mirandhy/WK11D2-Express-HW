const express = require('express');
const app = express( );
const port = 3000;

app.get('/greeting/:name', (req, res) =>{
    res.send(`Wow! Hello there, ${req.params.name}`);
    
    });

app.get('/greeting', (req, res) => {
    res.send(`Hello, stranger`);
});


/*tip calculator */
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    const total = Number(req.params.total);
    const tipPercentage = Number((`${req.params.tipPercentage}`) / 100);
    const newTotal = total * tipPercentage;

    res.send(`${newTotal}`)
    
})




app.listen(port, () => {
    console.log("The Listening on http://localhost:3000")
})

