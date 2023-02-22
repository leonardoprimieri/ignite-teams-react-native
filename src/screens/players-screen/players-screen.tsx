import { useState } from "react"
import { FlatList } from "react-native"

import { ButtonIcon, Filter, Header, PlayerCard, ScreenTitle, TextInput } from "@components/index"
import { Container, Form, HeaderList, NumberOfPlayers } from "./players-screen-styles"

export const PlayersScreen = () => {
  const [players, setPlayers] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('Time A')

  const handleTeamClick = (item: string) => {
    setSelectedTeam(item)
  }

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

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          horizontal
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => handleTeamClick(item)}
            />
          )}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => { }} />
        )}
      />
    </Container>
  )
}