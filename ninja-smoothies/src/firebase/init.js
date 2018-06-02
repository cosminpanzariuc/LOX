// Initialize Firebase
import firebase from 'firebase';
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyC4FMJXCuuz3e8B-KB2QbDFbKwrOTiV4wE",
  authDomain: "ninja-smoothies-a1baf.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-a1baf.firebaseio.com",
  projectId: "ninja-smoothies-a1baf",
  storageBucket: "ninja-smoothies-a1baf.appspot.com",
  messagingSenderId: "767395101697"
};

const firebaseApp = firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();
