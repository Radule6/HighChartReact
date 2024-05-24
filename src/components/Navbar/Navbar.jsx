import styled from "styled-components";
import PropTypes from "prop-types";
import { DarkModeButton } from "../";
const NavbarContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bg};
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <NavbarContainer>
      <h2>Take Home Assigmnent</h2>
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </NavbarContainer>
  );
};
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
