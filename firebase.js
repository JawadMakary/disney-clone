import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtFO1NdzhJ_dVZ8LvsoIWwg3Axn5HlklE",
    authDomain: "disneyclone.firebaseapp.com",
    projectId: "disneyclone",
    storageBucket: "disneyclone.appspot.com",
    messagingSenderId: "980938871736",
    appId: "1:980938871736:web:b5abbe394db4a26bba354d",
    measurementId: "G-PFRK87R8EJ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth= firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()
  const storage=firebase.storage()

  export {auth,provider,storage}
  export default db;
