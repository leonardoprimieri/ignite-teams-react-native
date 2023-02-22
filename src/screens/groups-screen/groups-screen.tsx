import { EmptyList, GroupCard, Header, ScreenTitle } from "@components/index"
import { useState } from "react"
import { FlatList } from "react-native"
import { Container } from "./groups-screen-styles"

export const GroupsScreen = () => {
  const [groups, setGroups] = useState(['Turma 1', 'Turma 2', 'Turma 3'])

  return (
    <Container>
      <Header />
      <ScreenTitle title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => <EmptyList message="Que tal cadastrar a primeira turma?" />}
      />
    </Container>
  )
}
