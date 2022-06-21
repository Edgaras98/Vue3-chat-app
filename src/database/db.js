import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBTuowErQsNLTN7T7jjv9in5OYW9gaZhuA',
  authDomain: 'firechat-app-db.firebaseapp.com',
  projectId: 'firechat-app-db',
  storageBucket: 'firechat-app-db.appspot.com',
  messagingSenderId: '11905302987',
  appId: '1:11905302987:web:d4ee828aa9dc9ee744764e',
  measurementId: 'G-YX1TV88Q4X'
}

const db = firebase.initializeApp(firebaseConfig)

export default db
