import { BackIcon, Container, Logo, BackButton } from "./header-styles"
import logoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native"

type Props = {
  shouldShowBackButton?: boolean
}

export const Header = ({ shouldShowBackButton = false }: Props) => {
  const navigation = useNavigation()

  const handleGoBack = () => navigation.navigate('groups')

  return (
    <Container>
      {shouldShowBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}