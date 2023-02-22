import { Container, Subtitle, Title } from "./screen-title-styles"

type Props = {
  title: string;
  subtitle: string;
}

export const ScreenTitle = ({ subtitle, title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}