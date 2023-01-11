import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { GlobalStyle } from "./style/global";
import { theme } from "./style/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
