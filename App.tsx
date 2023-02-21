import { GroupsScreen } from "@screens/index";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from "@components/index";

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Loading /> : <GroupsScreen />}
    </ThemeProvider>
  );
}

export default App
