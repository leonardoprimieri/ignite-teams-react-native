import { GroupCard, Header, ScreenTitle } from "@components/index"
import { useState } from "react"
import { FlatList } from "react-native"
import { Container } from "./groups-screen-styles"

export const GroupsScreen = () => {
  const [groups, setGroups] = useState(['Test Leonardo'])

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
      />
    </Container>
  )
}
