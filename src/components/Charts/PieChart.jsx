import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { themes } from "../../themes/highChartThemes";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsCSV from "highcharts/modules/export-data";
import HighChartsData from "highcharts/modules/data";

import PropTypes from "prop-types";
import { fetchData } from "../../utils/fetchData";

HighchartsExporting(Highcharts);
HighChartsData(Highcharts);
HighchartsCSV(Highcharts);

const PieChart = ({ chartTheme }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const options = {
    colors: themes[chartTheme].colors,

    chart: {
      backgroundColor: themes[chartTheme].backgroundColor,
      type: "pie",
    },
    title: {
      text: "% of Covid Deaths in USA,Brazil,Russia and India",
      style: {
        color: themes[chartTheme].titleColor,
      },
    },
    series: [
      {
        name: "Percentage",
        data: countryData.map((country) => ({
          name: country.country,
          y: parseFloat(country.deathPercentage),
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

PieChart.propTypes = {
  chartTheme: PropTypes.string.isRequired,
};

export default PieChart;
