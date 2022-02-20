import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./Config/firebaseConfig";

//firebaseApp will act as an entry point bet project & firebase
//it'll be used to initialize auth & DB
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };