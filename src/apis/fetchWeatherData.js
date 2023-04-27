const xKey = "8e03a6dcaf7847cea1893902211310";
const fetchWeatherData = async (placeName) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${xKey}&q=${placeName}&days=3&aqi=no&alerts=no`
  );
  const data = await response.json();
  return data;
};
export default fetchWeatherData;
