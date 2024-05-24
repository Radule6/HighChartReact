import { useState } from "react";
import styled from "styled-components";
import { ThemeProviderComponent, Navbar } from "./components";
import Charts from "./components/Charts/Charts";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  margin: 0;
  padding: 0;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProviderComponent darkMode={darkMode}>
      <AppWrapper>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Charts />
      </AppWrapper>
    </ThemeProviderComponent>
  );
};

export default App;
