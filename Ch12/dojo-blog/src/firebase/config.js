import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDwAnGQ6kmztV9iQ8vKIgreZ5yYSlDpisI",
    authDomain: "netninja-vue-firebase-si-35722.firebaseapp.com",
    projectId: "netninja-vue-firebase-si-35722",
    storageBucket: "netninja-vue-firebase-si-35722.appspot.com",
    messagingSenderId: "398999481293",
    appId: "1:398999481293:web:9363700de5bc993622f284"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firestore Service
const projectFirestore = firebase.firestore()

export { projectFirestore }