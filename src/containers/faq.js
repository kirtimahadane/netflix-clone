import React from 'react';
import { Accordian , OptForm} from '../components';
import faqsData from'../fixtures/faqs.json';
export function FaqsContainer(){
  return(
<Accordian>
  <Accordian.Title> Frequently Asked Questions</Accordian.Title>
  <Accordian.Frame>
  {
  faqsData.map(faq=>{
    return(
      <Accordian.Item key ={faq.id}>
        <Accordian.Header>{faq.header}</Accordian.Header>
        <Accordian.Body>{faq.body}</Accordian.Body>
      </Accordian.Item>
    )
  })
}


  </Accordian.Frame>
<OptForm>
  <OptForm.Input  placeholder="Email address"/>
  <OptForm.Button>Try It Now </OptForm.Button>
  <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
</OptForm>
  </Accordian>
  )
  
}