const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {res.sendFile('/index.html')});

app.get('/queryTest', (req, res) => {
    db.readNotesData();
    res.send('finished query')
});

app.listen('3000', () => {console.log('App listening on port 3000')});
