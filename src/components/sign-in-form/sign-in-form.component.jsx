
import { useState } from "react";


import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
    LoginWithEmailAndPassword,
    SignInWithGooglePopup
} from './../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'

const defaultValue = {
    email:'',
    password:''
}

const SignIn = () =>{

    const [loginField,setLoginField] = useState(defaultValue);
    const {email,password} = loginField;

    const googleSignUpWithPopup = async()=>{
       await SignInWithGooglePopup()
    }

    const resetFormInput=()=>{
        setLoginField(defaultValue)
    }

    const loginInHandler = async(event)=>{
        event.preventDefault();
        try{
            const {user} = await LoginWithEmailAndPassword(email,password)
          
            // console.log(user)
            resetFormInput()
        }catch(error){
           switch(error.code){
            case "auth/user-not-found":
                alert('Email does not exist.')
                break;

            case "auth/wrong-password":
                alert('Invalid email and Password.')
                break;

            default:
                console.log(error)
           }
        }
    }

    const changeHandler = (event)=>{
        const {name,value}=event.target
        setLoginField({...loginField,[name]:value})
    }

    return(
            <div className="sign-in-container">
                <h2>I already have an account.</h2>
                <span>Sign with your email and password</span>
                   <form onSubmit={loginInHandler}>
                       <FormInput label='Email' onChange={changeHandler} type= 'email' name='email' value ={email} required />
                       <FormInput label='Password' type= 'password' onChange={changeHandler} name='password' value ={password} required />
                       <div className="buttons-container">
                       <Button type='submit'> Sign In </Button>
                       <Button type='button' buttonType='google' onClick={googleSignUpWithPopup}>Google Sign In</Button>
                       
                       </div> 
                   </form>
            </div>
    )
}

export default SignIn