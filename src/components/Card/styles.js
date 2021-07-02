import styled from 'styled-components';

export const Container = styled.div`
  width: 33.3%;
  min-width: 400px;
  max-width: 500px;

  position: relative;

  border: 1px solid ${props => props.theme.colors.shape};
  transition: .2s;

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.colors.boxHover};
  }

  div.languages {
    position: absolute;
    top: -30px;
    right: 0;

    background: ${props => props.theme.colors.shape};  
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    padding: 8px 30px;

    text-transform: uppercase;
    transition: .3s;

    display: none;
    visibility: hidden;
    opacity: 0;

    > div.box {
      width: 15px;
      height: 15px;

      background: ${props => props.theme.colors.shape};

      transform: rotate(50deg);

      position: absolute;
      right: 0px;
      right: 8px;
    }
  }

  div.languages.active {
    display: unset;
    visibility: visible;
    opacity: 1;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 220px;

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: top;
  }
`;

export const Title = styled.h1`
  font-size: 23px;
  color: ${props => props.theme.colors.primary};

  text-align: left;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  width: 100%;
  min-height: 300px;

  background: ${props => props.theme.colors.background};
  
  position: relative;
  padding: 20px;
  text-align: center;

  > p {
    text-align: justify;
    color: ${props => props.theme.colors.text}
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 70px;

  border-top: 1px solid ${props => props.theme.colors.shape};

  position: absolute;
  bottom: 0;
  left: 0;

  > ul {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;

    list-style: none;

    > li {
      cursor: pointer;
      transition: .2s;

      &:hover {
        transform: scale(1.09);
      }

      > a {
        > img {
          width: 45px;
          height: 45px;
        }
      }
    }
  }
`;