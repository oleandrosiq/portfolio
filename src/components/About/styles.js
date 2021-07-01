import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const BoxAbout = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
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

export const Content = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    padding: 20px;
    text-align: justify;
  }
`;

export const Title = styled.div`
  min-width: 220px;
  height: 50px;

  padding: 3px 25px;
  position: relative;

  > span {
    width: 170px;
    height: 5px;

    display: block;
    
    position: absolute;
    bottom: 1px;
    left: 10px;

    background: var(--color-green);
  }
`;

export const Languages = styled.div`
  width: max-content;
  height: 70px;

  padding: 20px;

  > ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 20px;

    > li {
      > img {
        width: 40px;
        height: 40px;
      }
    } 
  }
`;