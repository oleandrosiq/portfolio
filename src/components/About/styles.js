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

  @media (max-width: 1080px) {
    height: unset;

    flex-direction: column;
    gap: 30px;

    text-align: center;
    padding-bottom: 30px;
  }
`;

export const BoxImage = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 50%;
  border: 4px solid var(--color-green);
  margin-right: 100px;

  > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  > nav {
    width: 100%;
    height: 50px;

    background: none;

    > ul {
      height: 100%;
      list-style: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      > li {
        &:nth-child(1) {
          margin-top: -60px;
        }

        &:nth-child(2) {
          margin-top: -10px;
        }

        &:nth-child(3) {
          margin-top: -8px;
        }

        &:nth-child(4) {
          margin-top: -60px;
        }

        transition: .2s;
        &:hover {
          transform: scale(1.07);
        }

        > a {
          > img {
          width: 30px;
          height: 30px;
          }
        }
      }
    }
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
    padding: 20px;
    text-align: justify;
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