import styled from 'styled-components'

export const Container = styled.form`

  display: flex;
  flex-direction: column;
  h1{
    color: #363F5F;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input{
    width: 100%;
    padding:0 1.5rem;
    height:4rem;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    background: #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    
    &::placeholder{
      color: #969CB3;
      
    }
    & + input{
      margin-top: 1rem;
    }

  }
  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background:#33CC95;
    color: #fff;
    border:none;
    margin-top: 1.5rem;
    border-radius:8px;
    transition: filter 0.2s;
   &:hover{
    filter: brightness(0.9);
   }
  }  
  `;

  export const Buttons = styled.div`
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  
    
  `;
  
  const  colors = {
    green:'#12A454',
    red:'#f9f9'
  }
  interface IradioBox {
    isActive:boolean;
    activeColor: 'green' | 'red';
  }
  export const RadioBox = styled.button<IradioBox>`
      height: 4rem;
      border: 1px solid #d7d7d7;
      border-radius:8px ;
      background:${(props) => props.isActive? colors[props.activeColor]: 'transparent'};
      opacity: ${(props) => props.isActive? '0.9' :''};
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        border-color: #969CB2;
      }
      img{
        height: 20px;
        width: 20px;
      }
      span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: ${(props) => props.isActive? '#fff' :'#363F5F'};
      }
    
  `;