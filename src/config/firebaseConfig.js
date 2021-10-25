import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration from .env variables. 
const firebaseConfig = {
  apiKey: proces.env.API_KEY,
  authDomain: proces.env.AUTH_DOMAIN,
  projectId: proces.env.PROJECT_ID,
  storageBucket: proces.env.STORAGE_BUCKET,
  messagingSenderId: proces.env.MESSAGING_SENDER_ID,
  appId: proces.env.APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export const auth = app.auth();
export const firestore = app.firestore();

export default firebaseConfig;
