import { TouchableOpacityProps } from "react-native"
import { Container, Title, ButtonTypeStyleProps } from "./button-styles"

type Props = {
  title: string
  type?: ButtonTypeStyleProps
} & TouchableOpacityProps

export const Button = ({ title, type = 'primary', ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}