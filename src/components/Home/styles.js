import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Message = styled.p`
  font-size: 20px;
  color: var(--color-green);
  
  margin: 24px 0;
`;

export const Main = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 45%;
  height: 100%;

  padding: 30px;

  > h2 {
    color: var(--color-green);
  }
  > p {
    padding-top: 40px;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;
  border: 4px solid var(--color-green);
  margin-right: 100px;

  background-image: url('https://github.com/leandrosiq1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Buttons = styled.div`
  width: 400px;
  height: 100px;

  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > a {
    width: 140px;
    height: 40px;

    background: var(--color-shape);
    border-radius: 5px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: var(--color-white);
  
    text-decoration: none;
    transition: .2s;

    &:hover {
      transform: scale(1.05);
      
      background: var(--color-shape-hover);
      border: 1px solid var(--color-green);
      color: var(--color-green);
    }
  }
`;