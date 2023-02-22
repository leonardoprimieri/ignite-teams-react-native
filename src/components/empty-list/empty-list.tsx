import { Container, Message } from "./empty-list-styles"

type Props = {
  message: string
}

export const EmptyList = ({ message }: Props) => {
  return <Container>
    <Message>{message}</Message>
  </Container>
}