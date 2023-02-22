import { TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"
import { Container } from "./text-input-styles"

type Props = TextInputProps

export const TextInput = ({ ...rest }: Props) => {
  const { COLORS } = useTheme()

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}