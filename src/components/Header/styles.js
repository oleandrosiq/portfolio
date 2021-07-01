import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 65px;

  border-bottom: 1px solid var(--color-shape);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    font-size: 33px;
    color: var(--color-white);

    text-decoration: none;
    font-family: 'Lobster', sans-serif;
    display: block;

    transition: .2s;

    &:hover {
      transform: scale(1.05) rotate(-10deg);
      color: var(--color-green);
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
          color: var(--color-green);
        }
      }

      a {
        font-size: 20px;
        color: var(--color-white);

        text-decoration: none;
      }

      a.active {
        color: var(--color-green);
        border-bottom: 1px solid var(--color-green);
      }
    }
  }
`;