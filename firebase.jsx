
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbezjyx_NdK5at_94NcBS29UUaZUxGzMw",
  authDomain: "netflix-d0f35.firebaseapp.com",
  projectId: "netflix-d0f35",
  storageBucket: "netflix-d0f35.appspot.com",
  messagingSenderId: "519485233054",
  appId: "1:519485233054:web:89b7892e3fd2cc789c688f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);