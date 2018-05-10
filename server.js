const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {res.sendFile('src/index.html')});

app.get('/api/', (req, res) => {
    db.readNotesData(function(data){
      res.json(data);
    });

});

app.listen(PORT, () => {console.log('App listening on port ' + PORT)});
