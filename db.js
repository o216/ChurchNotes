const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBH71f8hjyDq4O8m5tqsn5GxTiWLfLMy_g",
  authDomain: "reflect-4c46e.firebaseapp.com",
  databaseURL: "https://reflect-4c46e.firebaseio.com",
  projectId: "reflect-4c46e",
  storageBucket: "",
  messagingSenderId: "600197178871"
});

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
