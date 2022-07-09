import styled from 'styled-components'

interface Icontainer {
  bg?: boolean;
}

export const Container = styled.div<Icontainer>`
  background: ${props => props.bg? '#33CC95' : '#FFF'};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  height: 8.5rem;
  color: ${props => props.bg? '#fff':'#363F5F'};
  

  
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  strong{
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
  }
`;