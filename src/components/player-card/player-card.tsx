import { ButtonIcon } from "@components/button-icon/button-icon"
import { Container, Icon, Name } from "./player-card-styles"

type Props = {
  name: string
  onRemove: () => void
}

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  )
}