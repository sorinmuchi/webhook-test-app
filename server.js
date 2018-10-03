require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/data', (req, res) => {
    const data = {
        name: 'Sorin',
        height: 183,
        favorite_snack: 'cheese'
    };

    res.send(JSON.stringify(data));
});

app.post('/data', (req, res) => {
    const { body } = req;
    console.log(body);
    res.sendStatus(200);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));