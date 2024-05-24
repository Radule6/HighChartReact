import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { themes } from "../../themes/highChartThemes";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsCSV from "highcharts/modules/export-data";
import HighChartsData from "highcharts/modules/data";

import PropTypes from "prop-types";

HighchartsExporting(Highcharts);
HighChartsData(Highcharts);
HighchartsCSV(Highcharts);

const LineChart = ({ chartTheme }) => {
  const [chartData, setChartData] = useState({
    precipitation: [79.1, 62.3, 64.5, 65.2, 54.8, 40.7, 19.2],
    temperature: [12.5, 13.7, 15.6, 18.3, 22.7, 27.5, 30.2],
    categories: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  });

  // I used it to simulate api data retrieval
  useEffect(() => {
    const fetchData = async () => {
      // Simulating delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setChartData({
        precipitation: [65.1, 53.2, 48.5, 62.3, 45.8, 39.7, 18.9],
        temperature: [11.8, 13.2, 14.9, 17.6, 21.2, 26.3, 29.8],
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);

  const options = {
    colors: themes[chartTheme].colors,
    title: {
      text: "Temperature and Precipitaion",
      style: {
        color: themes[chartTheme].titleColor,
      },
    },
    chart: {
      backgroundColor: themes[chartTheme].backgroundColor,
      zooming: {
        type: "xy",
      },
    },
    xAxis: [
      {
        categories: chartData.categories,
        crosshair: true,
        labels: {
          style: {
            color: themes[chartTheme].labelColor,
          },
        },
      },
    ],
    yAxis: [
      {
        labels: {
          format: "{value}°C",
          style: {
            color: themes[chartTheme].titleColor,
          },
        },
        title: {
          text: "Temperature",
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      },
      {
        title: {
          text: "Precipitation",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        labels: {
          format: "{value} mm",
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      enabled: true,
      format:
        '<span style="font-size: 0.8rem">{key}</span><br/>' +
        "{#each points}" +
        '<span style="color:{color}">\u25CF</span> ' +
        "{series.name}: <b>{y}</b><br/>" +
        "{/each}",
      shared: true,
    },

    series: [
      {
        name: "Precipitation",
        type: "column",
        yAxis: 1,
        data: chartData.precipitation,
        tooltip: {
          valueSuffix: " mm",
        },
      },
      {
        name: "Temperature",
        type: "spline",
        data: chartData.temperature,
        tooltip: {
          valueSuffix: "°C",
        },
      },
    ],
  };

  //had issues setting up the theming of charts
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

LineChart.propTypes = {
  chartTheme: PropTypes.string.isRequired,
};

export default LineChart;
