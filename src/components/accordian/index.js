import React,{useState, useContext, createContext} from 'react';
import { Container , Inner, Title, Item, Header, Body, Frame} from './styles/accordian';
const ToggleContext= createContext();
export default  function Accordian({children, ...restProps}){
return <Container {...restProps}>
  <Inner>{children}</Inner>
</Container>
}
Accordian.Title= function AccordianTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Accordian.Inner= function AccordianInner({children, ...restProps}){
  return <Inner {...restProps}>{children}</Inner>
}
Accordian.Item= function AccordianItem({children, ...restProps}){
  const [showToggle, setShowToggle]=useState();
  return (
  <ToggleContext.Provider value={{showToggle, setShowToggle}}>
      <Item {...restProps}>{children}</Item>
  </ToggleContext.Provider>
  
  )
}

Accordian.Header= function AccordianHeader({children, ...restProps}){
  const {showToggle, setShowToggle}= useContext(ToggleContext);
  return <Header  onClick={()=>setShowToggle(!showToggle)} {...restProps}>{children}
  {showToggle? (<img src="images/icons/close-slim.png" alt="close"/>):
  (<img src="images/icons/add.png"/> )}
  </Header>
}

Accordian.Body= function AccordianBody({children, ...restProps}){
  const {showToggle}= useContext(ToggleContext);
  return (
  
    showToggle?<Body {...restProps}>{children}</Body>:null

  )
}
Accordian.Frame= function AccordianFrame({children, ...restProps}){
  return <Frame {...restProps}>{children}</Frame>
}