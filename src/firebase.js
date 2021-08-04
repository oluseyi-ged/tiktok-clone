import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCGvFS03bn-iGxZpAsJv82gI_gOHoS56xY",
  authDomain: "tiktok-clone-7d7a2.firebaseapp.com",
  projectId: "tiktok-clone-7d7a2",
  storageBucket: "tiktok-clone-7d7a2.appspot.com",
  messagingSenderId: "992808156503",
  appId: "1:992808156503:web:42f833125e2df354cf9212",
  measurementId: "G-6QBZCC9FKK",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
