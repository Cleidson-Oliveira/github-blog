import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { GlobalStyle } from "./style/global";
import { theme } from "./style/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="post">
            <Route path=":postId" element={<Post />} />            
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
