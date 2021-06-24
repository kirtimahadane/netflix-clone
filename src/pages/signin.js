import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'; 
import  * as ROUTES from '../constants/routes';
import {Form} from '../components';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
export default function Signin(){
  const {history}= useHistory();
  const {firebase}= useContext(FirebaseContext);
  
  const[emailAddress, setEmailAddress]=useState("");
  const[password, setPassword]= useState("");
  const [error, setError]= useState("");
  const isInValid= password ===''|| emailAddress ==='';
 
  const handleSignin=(e)=>{
    e.preventDefault();
       firebase
       .auth()
       .signInWithEmailAndPasword(emailAddress, password)
       .then(()=>{
         setEmailAddress("");
         setPassword("");
         setError("");
         history.push(ROUTES.BROWSE);
       }) 
       .catch((error)=>setError(error.message));
  }
  return(
    <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
           placeholder=" Email Address"
          value={emailAddress}
          onChange={({target})=>setEmailAddress(target.value)}         
          />
          <Form.Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={({target})=>setPassword(target.value)} 
          autoComplete="off"        
          />
          <Form.Submit type="submit" disabled={isInValid}>
          
          Sign In</Form.Submit>
            {
              /*
              <Form.Text>
            New to Netflix?<Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
            </Form.Text>
              */
            }
          
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>

        </Form.Base>
      </Form>
    </HeaderContainer>
    <FooterContainer/>
    </>
  )
}