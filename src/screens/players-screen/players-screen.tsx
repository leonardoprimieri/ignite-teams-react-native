import { ButtonIcon, Header, ScreenTitle } from "@components/index"
import { Container } from "./players-screen-styles"

export const PlayersScreen = () => {
  return (
    <Container>
      <Header shouldShowBackButton />

      <ScreenTitle
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <ButtonIcon icon="home" />
    </Container>
  )
}