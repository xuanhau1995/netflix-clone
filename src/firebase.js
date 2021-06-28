import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdDHNW5Pr4W2bfJacmn6FNqsAWvKroCyE",
  authDomain: "netflix-clone-2-1-yt.firebaseapp.com",
  projectId: "netflix-clone-2-1-yt",
  storageBucket: "netflix-clone-2-1-yt.appspot.com",
  messagingSenderId: "342086675197",
  appId: "1:342086675197:web:a58845c34cd6e9d4a1ac94",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
