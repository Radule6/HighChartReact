import { useState } from "react";
import styled from "styled-components";
import { themes } from "../../themes/highChartThemes";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Container = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 33px;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 15px;
  }
  @media (max-width: 468px) {
    width: 100%;
    height: 100%;
  }
`;
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ThemeSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.bg};
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const Charts = () => {
  const [chartTheme, setChartTheme] = useState("dark");

  const handleThemeChange = (event) => {
    setChartTheme(event.target.value);
  };

  return (
    <Container>
      <div>
        <ThemeSelect value={chartTheme} onChange={handleThemeChange}>
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
            </option>
          ))}
        </ThemeSelect>
      </div>
      <ChartContainer>
        <LineChart chartTheme={chartTheme} />
        <PieChart chartTheme={chartTheme} />
      </ChartContainer>
    </Container>
  );
};

export default Charts;
