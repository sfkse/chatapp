import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: 'AIzaSyCPJpQq6RyCsWs4wY-ln1csWLSmxvnFcVE',
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const signUpUser = (values) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
