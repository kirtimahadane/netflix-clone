import React, { useState } from 'react';
import {Header} from '../components';
import  * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase';
import {SelelctProfileContainer} from './profiles';
import {FooterContainer} from './footer';

export  function BrowseContainer(){
  const [profile, setProfile]= useState({});
  const user={
    displayName:"Karl",
    photoURL:"1"
  }
  return profile.displayName? (
    <>
    <p> Browse Container</p>
    <FooterContainer/>
    </>
  ):(
    <SelelctProfileContainer user={user} setProfile={setProfile}/>
  )
}