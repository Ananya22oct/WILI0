import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration 
 var firebaseConfig
   = { apiKey: "AIzaSyA2HC3-wuKlLWOWnl8dtm_LgLH0TO8AUdY", authDomain: "w112-4b21d.firebaseapp.com", databaseURL: "https://w112-4b21d-default-rtdb.firebaseio.com", projectId: "w112-4b21d", storageBucket: "w112-4b21d.appspot.com", messagingSenderId: "915104327713", appId: "1:915104327713:web:04ae51412c36cb5f925b60" }; // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();