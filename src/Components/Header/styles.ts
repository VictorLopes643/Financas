import styled from 'styled-components'

export const Container = styled.header`
  background: #5429CC;
  `;

  export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem 10rem;
    padding-top:3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: #fff;
      background: #6933FF;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }

  `;