import { Button, Header, ScreenTitle, TextInput } from '@components/index'
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
        <TextInput placeholder='Nome da turma' />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
