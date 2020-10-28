import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyB-RuuCARJ_tsnbcKBdoXKCMjcX-n1SUiQ",
    authDomain: "eventartistry-3a58e.firebaseapp.com",
    databaseURL: "https://eventartistry-3a58e.firebaseio.com",
    projectId: "eventartistry-3a58e",
    storageBucket: "eventartistry-3a58e.appspot.com",
    messagingSenderId: "1040105945207",
    appId: "1:1040105945207:web:59ce791f4caf597d29ee72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp}
