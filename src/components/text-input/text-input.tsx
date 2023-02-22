import { TextInputProps } from "react-native"
import { Container } from "./text-input-styles"

type Props = TextInputProps

export const TextInput = ({ ...rest }: Props) => {
  return (
    <Container {...rest} />
  )
}