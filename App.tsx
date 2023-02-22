import { CreateGroupScreen } from "@screens/index";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from "@components/index";
import { StatusBar } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? <Loading /> : <CreateGroupScreen />}
    </ThemeProvider>
  );
}

export default App
