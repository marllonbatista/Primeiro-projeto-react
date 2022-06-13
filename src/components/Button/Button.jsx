
//--------- Import --------- 
import styled from 'styled-components'
//--------- CSS ---------
const BButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    background-color: white;
    align-items: center;
    font-size: 1.2rem;
    
    
`;
//--------- Component --------- 
   const Button = ({children,onclik})=>{
       return(
   
           <BButton onClick={onclik} >
               {children}
           </BButton>
       )
       }
   export default Button