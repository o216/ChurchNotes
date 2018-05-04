const firebase = require('./creds.js');

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

/**
  * Query Definitions
  */
const queries = {};
queries.readNotesData = () => {
    firestore.collection("Notes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
};

module.exports = queries;
