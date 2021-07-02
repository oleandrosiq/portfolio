import { Container } from './styles';

export function Message({ text, subText }) {
  return (
    <Container>
      {text} <br />
      {subText}
    </Container>
  );
}