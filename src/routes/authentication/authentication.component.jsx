
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

import { 
    auth,
    SignInWithGooglePopup,
    createUserDocumentFromAuth,
    SignInWithGoogleRedirect
 } from "../../utils/firebase/firebase.utils";

 import SignIn from "../../components/sign-in-form/sign-in-form.component";
 import SignUpForm from '../../components/sign-up-form/sign-up-from.component';
 
 import './authentication.styles.scss'

const Authentication = () =>{

    //used when when login by google redirect

    // useEffect(()=>{
    //     async function fetchData(){
    //         const response = await getRedirectResult(auth)
    //         console.log('res',response)
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //     }
    //     fetchData()
    // },[])

    const getGoogleSignInPopup = async()=>{
     const {user} = await SignInWithGooglePopup() 
     const data = await createUserDocumentFromAuth(user)
    }

    // const getGoogleSignInRedirect = async()=>{
    //     const response = await SignInWithGoogleRedirect()
    //     console.log(response)
    // }

    return(
        <div className="authentication-container">
        <SignIn/>
        <SignUpForm/>
        </div>
    )
}

export default Authentication;