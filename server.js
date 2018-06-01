const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {res.sendFile('dist/index.html')});

app.get('/api/all', (req, res) => {
    db.readNotesData(function(data){
      res.json(data);
    });

});

app.post('/api/add', (req, res) => {
    db.addNote(req.body, function(data){
      res.json(data);
    });

});



app.listen(PORT, () => {console.log('App listening on port ' + PORT)});
