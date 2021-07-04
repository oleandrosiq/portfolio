import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  border-bottom: 1px solid ${props => props.theme.colors.shape};
  background: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.div`
  width: 100%;

  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 620px) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  > a {
    font-size: 33px;
    color: ${props => props.theme.colors.text};

    text-decoration: none;
    font-family: 'Lobster', sans-serif;
    display: block;

    transition: .2s;

    &:hover {
      transform: scale(1.05) rotate(-10deg);
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const Nav = styled.nav`

  > ul {
    display: flex;
    align-items: center;
    gap: 40px;

    list-style: none;

    > li {
        transition: .2s;

      &:hover {
        transform: scale(1.09);

        a {
          color: ${props => props.theme.colors.primary};
        }
      }

      a {
        font-size: 20px;
        color: ${props => props.theme.colors.text};

        text-decoration: none;
      }

      a.active {
        color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const WrapperMobile = styled.div`
  width: 100%;

  padding: 20px 0;

  display: none;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  
  opacity: 0;
  visibility: hidden;

  @media (max-width: 620px) {
    display: flex;
    opacity: 1;
    visibility: visible;
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > a {
    font-size: 33px;
    color: ${props => props.theme.colors.text};

    text-decoration: none;
    font-family: 'Lobster', sans-serif;
    display: block;

    transition: .2s;

    &:hover {
      transform: scale(1.05) rotate(-10deg);
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 550px) {
    > a {
      font-size: 25px;
    }

    > div.menu-mobile {
      width: 30px;
      height: 30px;
    }
  }

  > div.menu-mobile {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    transition: .4s;
    cursor: pointer;

    &.active {
      justify-content: center;
      > div {
        transition: .2s;
        &:nth-child(1) {
          transform: rotate(50deg);
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          transform: rotate(-50deg);
        }
      }
    }

    > div {
      width: 100%;
      height: 5px;

      background: ${props => props.theme.colors.text};
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const NavMobile = styled.div`
  margin: 0 auto;
  
  > ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    list-style: none;

    > li {
        transition: .2s;

      &:hover {
        transform: scale(1.09);

        a {
          color: ${props => props.theme.colors.primary};
        }
      }

      a {
        font-size: 20px;
        color: ${props => props.theme.colors.text};

        text-decoration: none;
      }

      a.active {
        color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }
    }
  }
`;