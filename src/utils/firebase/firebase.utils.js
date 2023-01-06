
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQQlY0TUYuJjzS9hR6cZmKwaR9GAX_ZOc",
  authDomain: "crwn-clothing-db-3fc93.firebaseapp.com",
  projectId: "crwn-clothing-db-3fc93",
  storageBucket: "crwn-clothing-db-3fc93.appspot.com",
  messagingSenderId: "1440379680",
  appId: "1:1440379680:web:bf8cb614197e951dc75d45"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:'select_account'
})

const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth,additionalDetail={})=>{
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const {displayName,email} =userAuth;
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{displayName,email,createdAt,...additionalDetail})
        }
        catch(error){
            console.log('error creating user',error.message)
        }
    }

    return userDocRef

}


export const auth = getAuth()
export const SignInWithGooglePopup = () =>signInWithPopup(auth,provider)
export const SignInWithGoogleRedirect = () =>signInWithRedirect(auth,provider)
export const createUserWithEmailAndPasswordCustom = async(email,password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

export const LoginWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>{
  return  onAuthStateChanged(auth,callback)
}