import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyClQSyfL0ijGOnGB_BnpjHXl0QYWVTON9A",
  authDomain: "nanika-jewellers.firebaseapp.com",
  projectId: "nanika-jewellers",
  storageBucket: "nanika-jewellers.firebasestorage.app",
  messagingSenderId: "237847383614",
  appId: "1:237847383614:web:c37603b071e802c18c4b6f",
  measurementId: "G-43XJJGY6BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
