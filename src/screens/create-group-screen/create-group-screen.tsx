import { Button, Header, ScreenTitle, TextInput } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './create-group-styles'

export const CreateGroupScreen = () => {
  const navigation = useNavigation()

  const handleCreateNewGroup = () => {
    navigation.navigate('players', { group: 'Turma 1' })
  }

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
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleCreateNewGroup} />
      </Content>
    </Container>
  )
}
