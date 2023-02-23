import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GroupsScreen, CreateGroupScreen, PlayersScreen } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={GroupsScreen} />
      <Screen name="create-group" component={CreateGroupScreen} />
      <Screen name="players" component={PlayersScreen} />
    </Navigator>
  )
}