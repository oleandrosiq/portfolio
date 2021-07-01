import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const BoxAbout = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1080px) {
    height: unset;

    flex-direction: column;
    gap: 30px;

    text-align: center;
    padding-bottom: 30px;
  }
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;

  border-radius: 50%;
  border: 4px solid var(--color-green);
  margin-right: 100px;

  background-image: url('https://github.com/leandrosiq1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    width: 300px;
    height: 300px;   
  }

  @media (max-width: 1080px) {
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  width: 60%;

  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    font-size: 20px;
    padding: 20px;
    text-align: justify;

    @media (max-width: 1100px) {
      font-size: initial;
    }
    @media (max-width: 1340px) {
      font-size: 17px;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
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