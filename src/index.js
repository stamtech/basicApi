const express = require('express');
const bodyParser = require('body-parser');

const players = require('./routes/players');
const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());

app.use('/players', players);

app.get('/status', (req, res) => {
    const localtime = new Date().toLocaleDateString();
    res.status(200).send(`your server time is ${localtime}`);
});
app.get('*', (req, res) => {
    res.status(404).send('this route does not exist');
});

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
});

module.exports = app;
