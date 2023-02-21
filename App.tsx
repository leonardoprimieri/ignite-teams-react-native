import { GroupsScreen } from "@screens/index";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GroupsScreen />
    </ThemeProvider>
  );
}

export default App
