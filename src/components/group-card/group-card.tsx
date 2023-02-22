import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./group-card-styles"

type Props = {
  title: string
} & TouchableOpacityProps

export const GroupCard = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}