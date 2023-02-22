import { Button, Header, ScreenTitle } from '@components/index'
import { Container, Content, Icon } from './create-group-styles'

export const CreateGroupScreen = () => {
  return (
    <Container>
      <Header shouldShowBackButton />
      <Content>
        <Icon />

        <ScreenTitle
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}
