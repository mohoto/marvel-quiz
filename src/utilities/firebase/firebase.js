import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCcaPYXgVSvVk9QbQDklMRrbA3C_9JhDA4",
  authDomain: "marvel-quiz-cb5a8.firebaseapp.com",
  projectId: "marvel-quiz-cb5a8",
  storageBucket: "marvel-quiz-cb5a8.appspot.com",
  messagingSenderId: "631525777111",
  appId: "1:631525777111:web:773dd299d9444220805a92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storageRef = firebase.storage().ref();

export {auth, storageRef};

export default db;