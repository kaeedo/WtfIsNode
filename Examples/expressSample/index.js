const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    const result = num1 + num2;

    res.send(result);
})

app.get('/longrunning', (req, res) => {
    const startedAt = new Date();
    setTimeout(() => {
        const finishedAt = new Date();
        res.send(`Started at: ${startedAt.toLocaleTimeString()}, and finished at: ${finishedAt.toLocaleTimeString()}`);
    }, 10000);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
