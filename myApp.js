require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World!');

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' 
    ? 'HELLO JSON'
    : 'Hello json';
    res.json({ message });
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});




















 module.exports = app;


