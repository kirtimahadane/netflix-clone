import React, {useState} from 'react';

import  * as ROUTES from '../constants/routes';
import {Form} from '../components';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
export default function Signin(){
  const [error, setError]= useState("");
  const[emailAddress, setEmailAddress]=useState("");
  const[password, setPassword]= useState("");
  const isInValid= password ===''|| emailAddress ==='';
 
  const handleSignin=(e)=>{
    e.preventDefault();

    //call in firebase to authenticate the user
    //if there is error , populate the error state
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
          onChange={({target})=>setEmailAddress(target.value)} 
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