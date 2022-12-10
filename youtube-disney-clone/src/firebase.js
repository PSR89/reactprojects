import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBV4TU8CcwLaLrYbeHjPxy_XWU1ZC109Xw",
  authDomain: "disneyplus-10402.firebaseapp.com",
  projectId: "disneyplus-10402",
  storageBucket: "disneyplus-10402.appspot.com",
  messagingSenderId: "140716222672",
  appId: "1:140716222672:web:563f0cb93f4244373456d5",
  measurementId: "G-Z3SNF06XJG",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
