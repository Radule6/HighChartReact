export const fetchData = async () => {
  try {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await response.json();

    // Filter data for specific countries
    const countriesToShow = ["USA", "India", "Brazil", "Russia"];
    const filteredData = data.filter((country) =>
      countriesToShow.includes(country.country)
    );

    // Calculate total deaths
    const totalDeaths = filteredData.reduce(
      (acc, country) => acc + country.deaths,
      0
    );

    // Calculate percentage of deaths for each country
    const deathPercentages = filteredData.map((country) => ({
      country: country.country,
      deathPercentage: ((country.deaths / totalDeaths) * 100).toFixed(2),
    }));

    return deathPercentages;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
