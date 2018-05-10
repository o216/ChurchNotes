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
          data.push(doc.data());
      });
      callback(data);
    });
};

module.exports = queries;
