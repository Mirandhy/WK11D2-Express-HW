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


/*Magic 8 */
app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g," ")
    const magic8BallResponses = 
        ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    ;

    const randIdx = Math.floor(Math.random( )*20);

    res.send(`<h1>${question} ? ${magic8BallResponses[randIdx]}</h1>` )
});




app.listen(port, () => {
    console.log("The Listening on http://localhost:3000")
})

