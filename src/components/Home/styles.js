import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Message = styled.p`
  font-size: 20px;
  color: var(--color-green);
  
  margin: 24px 0;

  @media (max-width: 550px) {
    font-size: 17px;
  }
`;

export const Main = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 910px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const Content = styled.div`
  width: 45%;
  height: 100%;

  padding: 30px;

  @media (max-width: 910px) {
    width: 100%;
    text-align: center;
  }

  > h1 {
    font-size: 34px;

    @media (min-width: 1190px) {
      font-size: 40px;
    }

    @media (min-width: 1300px) {
      font-size: 45px;
    }
  }
  > h2 {
    font-size: 28px;
    color: var(--color-green);

    @media (min-width: 1190px) {
      font-size: 35px;
    }

    @media (min-width: 1300px) {
      font-size: 40px;
    }
  }
  > p {
    font-size: 20px;
    padding-top: 40px;

    @media (min-width: 1190px) {
      font-size: 23px;
    }
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

  @media (max-width: 750px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 910px) {
    margin: 0 auto;
  }

  @media (min-width: 1190px) {
    width: 400px;
    height: 400px;
  }
`;

export const Buttons = styled.div`
  min-width: 400px;
  height: 100px;

  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > a {
    width: 170px;
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

    @media (min-width: 1190px) {
    width: 250px;
    height: 50px;
  }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 160px);

  display: flex;
  align-items: center;
  justify-content: center;
`;