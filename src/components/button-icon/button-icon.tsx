import { TouchableOpacityProps } from "react-native"
import { Container, ButtonIconTypeStyleProps, Icon } from "./button-icon-styles"
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  type?: ButtonIconTypeStyleProps
  icon?: keyof typeof MaterialIcons.glyphMap
} & TouchableOpacityProps

export const ButtonIcon = ({ type = 'primary', icon, ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
} 