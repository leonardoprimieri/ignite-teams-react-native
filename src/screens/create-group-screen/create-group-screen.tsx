import { Button, Header, ScreenTitle, TextInput } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Container, Content, Icon } from './create-group-styles'

export const CreateGroupScreen = () => {
  const navigation = useNavigation()

  const [group, setGroup] = useState('')

  const handleCreateNewGroup = () => {
    navigation.navigate('players', { group })
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
        <TextInput
          placeholder='Nome da turma'
          value={group}
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateNewGroup}
        />
      </Content>
    </Container>
  )
}
