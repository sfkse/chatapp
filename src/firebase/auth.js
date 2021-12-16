import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const signUpUser = (values, setUserAuth, setError, navigate) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(userCredential)
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('email sent!')
                })
                .catch(error => {
                    console.log(error.message)
                });
            setUserAuth(user.auth.currentUser)
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setError(errorCode)
        });
}

export const signupWithGoogle = () => {
    const auth = getAuth();
    //Create Google provider instance
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}