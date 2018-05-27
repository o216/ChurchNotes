const firebase = require('./creds.js');

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

/**
  * Query Definitions
  */
const queries = {};
queries.readNotesData = (callback) => {
    const data = [];
    firestore.collection("Notes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         let note = {};
         note = doc.data();
         note.id = doc.id;
         note.date = note.date.seconds;
         note.date *= 1000;
         data.push(note);
      });
      callback(data);
    });
};

queries.addNote = (newNote, callback) => {
    const data = [];
    firestore.collection("Notes").add(newNote).then((docRef) => {
      callback(data);
    });
};



module.exports = queries;
