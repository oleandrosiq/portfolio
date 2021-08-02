import { Container } from './styles';

interface MessageProps {
  text: string;
  subText?: string;
}

export function Message({ text, subText }: MessageProps) {
  return (
    <Container>
      {text} <br />
      {subText}
    </Container>
  );
}