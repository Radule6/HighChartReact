import { useState } from "react";
import styled from "styled-components";
import { ThemeProviderComponent, Navbar, Charts } from "./components";

/*
Since most components in this example are very small and maintainable, I decided to put the styles of the components in the same file because it was easier to navigate because of the small size of the components
*/
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
