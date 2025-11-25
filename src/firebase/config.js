import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEAh47_L8SSbuGtnJwbFSwOSqOkjiAhEo",
  authDomain: "portafoliocvmi.firebaseapp.com",
  projectId: "portafoliocvmi",
  storageBucket: "portafoliocvmi.firebasestorage.app",
  messagingSenderId: "562449932047",
  appId: "1:562449932047:web:856a1064d20bc7a201a87a"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
