import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { LightTheme, DarkTheme } from "./utils/Theme";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
 display:flex;
`;

const Main = styled.div`
  flex:7;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
