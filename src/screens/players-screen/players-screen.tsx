import { ButtonIcon, Filter, Header, ScreenTitle, TextInput } from "@components/index"
import { Container, Form } from "./players-screen-styles"

export const PlayersScreen = () => {
  return (
    <Container>
      <Header shouldShowBackButton />
      <ScreenTitle
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <TextInput
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>
      <Filter title="Time a" />
    </Container>
  )
}