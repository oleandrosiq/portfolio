import styled from 'styled-components';

export const Container = styled.div`
  font-size: 20px;
  
  text-align: center;
  color: ${props => props.theme.colors.primary};
  
  margin: 24px 0;

  @media (max-width: 550px) {
    font-size: 17px;
  }
`;