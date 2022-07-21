import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxYc5vpHGZ6w4Dy8JDf8EiFr1_QrRjnXs",
    authDomain: "teslaclone-82d19.firebaseapp.com",
    projectId: "teslaclone-82d19",
    storageBucket: "teslaclone-82d19.appspot.com",
    messagingSenderId: "947039853522",
    appId: "1:947039853522:web:6c78222676d1d142ce060b"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }