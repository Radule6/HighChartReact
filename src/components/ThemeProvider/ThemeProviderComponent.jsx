import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes";

const ThemeProviderComponent = ({ children, darkMode }) => {
  const theme = darkMode ? darkTheme : lightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default ThemeProviderComponent;
