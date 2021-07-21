import styled from 'styled-components';

export const Container = styled.div`
  min-height: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-shape);
  padding: 10px;

  transition: all .2s ease-in;

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.colors.boxHover};
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.div`
  height: 100%;

  img {
    width: 400px;
    height: 100%;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    color: ${props => props.theme.colors.primary};
  }
`;

export const Description = styled.div`
  width: 100%;
  height: max-content;

  p {
    color: ${props => props.theme.colors.text};
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;

  gap: 10px;
  color: ${props => props.theme.colors.primary};

  @media (max-width: 1000px) {
    flex-direction: column;

    p {
      display: none;
    }
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 10px;

    li {
      a {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

export const Languages = styled.div`
  margin-left: 50px;
  color: ${props => props.theme.colors.primary};
`;