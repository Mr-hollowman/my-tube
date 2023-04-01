import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { LightTheme, DarkTheme } from "./utils/Theme";
import { useState } from "react";

const Container = styled.div`
 display:flex;
`;

const Main = styled.div`
  flex:7;
  background: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div`
`;

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? DarkTheme: LightTheme }>
    <Container>
      <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main>
        <Navbar />
        <Wrapper>
          jnjnjknk
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
