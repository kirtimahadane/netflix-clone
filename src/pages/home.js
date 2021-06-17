import React from 'react';
import {Feature,OptForm } from '../components';
import {JumbotronContainer} from '../containers/jumbotron';
import {FaqsContainer} from '../containers/faq';
import {FooterContainer} from '../containers/footer';
import {HeaderContainer} from '../containers/header';
export default function Home(){
return(
    <>
    <HeaderContainer>
   
      <Feature>
        <Feature.Title>Unlimited Films, TV Programmes and more..</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <OptForm>
        
  <OptForm.Input  placeholder="Email address"/>
  <OptForm.Button>Try It Now </OptForm.Button>
  <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
</OptForm>
</Feature>     
    
    </HeaderContainer>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    </>
)
}