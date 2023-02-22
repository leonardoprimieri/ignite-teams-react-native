import { Header, ScreenTitle } from "@components/index"
import { Container } from "./groups-screen-styles"

export const GroupsScreen = () => {
  return (
    <Container>
      <Header />
      <ScreenTitle title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  )
}
