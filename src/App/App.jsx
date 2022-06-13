//--------- Import --------- 
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from '../components/Button/Button'
// --------- CSS ---------
const Container = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color:black;
  width: 10rem;
  height: 3rem;
  margin: 0 auto;
  gap: 0.9rem;
`;
const Item = styled.h1`
  font-size: 1.2rem;
  color: white;
`;
const Text= styled.h1`
  text-align: center;
  font-size: 1rem;
`;
const Value = styled.span`
  position:absolute;
  background-color:rgb(89, 187, 8);
  margin-left: 190px;
  padding: 2px;
  border-radius: 5px;
  color: white;
`;

// --------- Function App ---------
function App() {

const [item,setItem]=useState(1);
const [value,setValue]=useState(5.50);
function sum(){
  setItem(item+1);
 
}
function decrease(){
  if(item>1)setItem(item-1);
 
}
useEffect(()=>{

  setValue(item*5.5)
},[item]);
  
  return (
    <>
      <Text >Quantidade: {item} unidade(s)</Text>
      <Container>
        <Button   onclik={decrease} >-</Button>
        <Item>{item}</Item>
        <Button   onclik={sum}>+</Button>
        <Value>R${value}</Value>
      </Container>
    </>
  )
}

export default App
