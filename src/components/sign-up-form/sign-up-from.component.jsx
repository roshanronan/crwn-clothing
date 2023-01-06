
import { useState,useContext } from "react";
import {
    createUserWithEmailAndPasswordCustom,
    createUserDocumentFromAuth} 
    from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";



const formDefaultValues = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
 

const SignUpForm = () =>{

    const [formFields,setFormFields] = useState(formDefaultValues);
    const {displayName,email,password,confirmPassword}=formFields;

    const handleEvent =(event) =>{
        const {name,value} = event.target

        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(password !== confirmPassword){
            alert('password does not match')
            return;
        }

        try{
             const {user} = await createUserWithEmailAndPasswordCustom(email,password)
             const userData = await createUserDocumentFromAuth(user,{displayName})   
             setFormFields(formDefaultValues);
       }catch(error){
           console.log('error while creating user',error)
       }
    }

    return(
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign Up with your Email and Password</span>        
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" name="displayName" onChange={handleEvent} value={displayName} required />
            <FormInput label ="Email" type='email' name="email" onChange={handleEvent} value={email} required/>
            <FormInput label ="Password" type='password' name="password" onChange={handleEvent} value={password} required/>
            <FormInput label ="Confirm Password" type='password' name="confirmPassword" onChange={handleEvent} value={confirmPassword} required/>
            <Button type='submit' >Sign Up</Button>
        </form>
        </div>
    )
}


export default SignUpForm;      