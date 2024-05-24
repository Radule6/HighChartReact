// themes.js
export const themes = {
  dark: {
    colors: [
      "#7cb5ec",
      "#434348",
      "#90ed7d",
      "#f7a35c",
      "#8085e9",
      "#f15c80",
      "#e4d354",
      "#2b908f",
      "#f45b5b",
    ],
    chart: {
      type: "area",
      backgroundColor: "#222222",
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      style: {
        color: "#ffffff",
        fontSize: "20px",
      },
    },
    xAxis: {
      lineColor: "#ffffff",
      labels: {
        style: {
          color: "#cccccc",
        },
      },
    },
    yAxis: {
      gridLineColor: "#444444",
      labels: {
        style: {
          color: "#cccccc",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#ffffff",
      },
    },
    legend: {
      itemStyle: {
        color: "#ffffff",
      },
      itemHoverStyle: {
        color: "#eeeeee",
      },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666",
        },
        fillColor: "#7cb5ec", // Initial color
      },
    },
  },
  pastel: {
    colors: [
      "#fbb4ae",
      "#b3cde3",
      "#ccebc5",
      "#decbe4",
      "#fed9a6",
      "#ffffcc",
      "#e5d8bd",
      "#fddaec",
      "#f2f2f2",
    ],
    chart: {
      type: "area",
      backgroundColor: "#f4f4f4",
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      style: {
        color: "#333333",
        fontSize: "20px",
      },
    },
    xAxis: {
      lineColor: "#333333",
      labels: {
        style: {
          color: "#666666",
        },
      },
    },
    yAxis: {
      gridLineColor: "#999999",
      labels: {
        style: {
          color: "#666666",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      style: {
        color: "#333333",
      },
    },
    legend: {
      itemStyle: {
        color: "#333333",
      },
      itemHoverStyle: {
        color: "#000000",
      },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666",
        },
        fillColor: "#fbb4ae", // Initial color
      },
    },
  },
  vibrant: {
    colors: [
      "#ff6f69",
      "#ffcc5c",
      "#88d8b0",
      "#6a0572",
      "#1e90ff",
      "#ff43a4",
      "#7a5c61",
      "#ffa41b",
      "#99e1e5",
    ],
    chart: {
      type: "area",
      backgroundColor: "#ffffff",
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      style: {
        color: "#333333",
        fontSize: "20px",
      },
    },
    xAxis: {
      lineColor: "#666666",
      labels: {
        style: {
          color: "#666666",
        },
      },
    },
    yAxis: {
      gridLineColor: "#999999",
      labels: {
        style: {
          color: "#666666",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#ffffff",
      },
    },
    legend: {
      itemStyle: {
        color: "#333333",
      },
      itemHoverStyle: {
        color: "#000000",
      },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666",
        },
        fillColor: "#ff6f69", // Initial color
      },
    },
  },
};
