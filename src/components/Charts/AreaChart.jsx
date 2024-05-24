import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { themes } from "../../themes/highgraphsTheme";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const AreaChart = ({ chartTheme }) => {
  const data = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      { name: "Product A", data: [29, 71, 106, 129, 144, 176] },
      { name: "Product B", data: [34, 78, 98, 113, 147, 169] },
      { name: "Product C", data: [39, 85, 110, 133, 150, 180] },
    ],
  };

  const options = {
    ...themes[chartTheme],
    title: {
      text: "Monthly Sales Report",
      style: {
        color: themes[chartTheme].title.style.color,
      },
    },
    xAxis: { categories: data.categories, tickmarkPlacement: "on" },
    yAxis: { title: { text: "Sales" } },
    tooltip: { split: true, valueSuffix: " units" },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: { lineWidth: 1, lineColor: "#666666" },
      },
    },
    series: data.series,
  };

  return (
    <ChartContainer>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ChartContainer>
  );
};

AreaChart.propTypes = {
  chartTheme: PropTypes.string.isRequired,
};

export default AreaChart;
