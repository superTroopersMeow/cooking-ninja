import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUJ09XU3zajgjhNvIKhxe7O_rr4me73R4",
    authDomain: "cooking-ninja-site-389e8.firebaseapp.com",
    projectId: "cooking-ninja-site-389e8",
    storageBucket: "cooking-ninja-site-389e8.appspot.com",
    messagingSenderId: "541817059150",
    appId: "1:541817059150:web:894b23820c1263c035101f"
};


const app = initializeApp(firebaseConfig);


//init firestore
const db = getFirestore(app);



export {db}