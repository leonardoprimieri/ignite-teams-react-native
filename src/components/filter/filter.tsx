import { TouchableOpacityProps } from "react-native"
import { Container, Title, FilterTypeStyleProps } from "./filter-styles"

type Props = { title: string } & TouchableOpacityProps & FilterTypeStyleProps

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}