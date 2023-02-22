import { BackIcon, Container, Logo, BackButton } from "./header-styles"
import logoImg from '@assets/logo.png'

type Props = {
  shouldShowBackButton?: boolean
}

export const Header = ({ shouldShowBackButton = false }: Props) => {
  return (
    <Container>
      {shouldShowBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}