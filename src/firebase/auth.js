import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


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
const auth = getAuth();

export const signUpUser = (values, setUserAuth, setError, history) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('email sent!')
                })
                .catch(error => {
                    console.log(error.message);
                });
            updateProfile(auth.currentUser, {
                displayName: values.name
            }).then(() => {
                setUserAuth(auth.currentUser)
                history.push('/')
            })

        }).catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setError(errorCode)
        });


}

export const signInUser = async (credentials, setUserAuth, setError, history) => {
    await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUserAuth(user)
            history.push('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(errorCode)
        });
}
export const signupWithGoogle = (setUserAuth, history) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.S
            const user = result.user;
            setUserAuth(user)
            history.push('/')
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

export const getSignedInUser = (setUserAuth, setLoading) => {
    const unsub = onAuthStateChanged(auth, (user) => {
        setUserAuth(user)
        setLoading(false)
    });
    return unsub
}

export const signOutUser = (history) => {
    signOut(auth).then(() => {
        history.push('/login')
    }).catch((error) => {
        console.log(error.message)
    });
}