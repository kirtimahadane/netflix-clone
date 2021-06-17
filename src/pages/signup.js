import React,{useState} from 'react';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';
export default function Signup(){
  const [firstName, setFirstName]= useState('');
  const [emailAddress, setEmailAddress]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');
  //form validation
  const isInValid= firstName ===''||
   emailAddress===''||
  password ==='';


  const handleSignup=(e)=>{
    e.preventDefault();
  }
  return(
    <>
    <HeaderContainer>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error &&<Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSignup} method="POST">
      <Form.Input
      placeholder="First Name"
      value={firstName}
      onChange={({target})=>setFirstName(target.value)}
      />
      <Form.Input
      placeholder="Email Address"
      value={emailAddress}
      onChange={({target})=>setEmailAddress(target.value)}
      />
      <Form.Input
      type="password"
      placeholder="Password"
      value={password}
      autoComplete="off"
      onChange={({target})=>setPassword(target.value)}
      />
      <Form.Submit type="submit" disabled={isInValid}>
        Sign Up
      </Form.Submit>
      {
        /*
        <Form.Text>
        Already a user? <Form.Link to="signin"> Sign In</Form.Link>
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