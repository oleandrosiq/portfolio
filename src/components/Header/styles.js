import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 65px;

  border-bottom: 1px solid ${props => props.theme.colors.shape};
  position: relative;
  background: ${props => props.theme.colors.background};

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