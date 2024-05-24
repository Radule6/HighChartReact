import { FaMoon, FaSun } from "react-icons/fa6";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.theme.color};
  cursor: pointer;
  color: ${(props) => props.theme.bg}!important;
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

const DarkModeButton = ({ darkMode, setDarkMode }) => {
  return (
    <Button onClick={() => setDarkMode((prevMode) => !prevMode)}>
      {darkMode ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

DarkModeButton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DarkModeButton;
