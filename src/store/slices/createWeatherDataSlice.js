import fetchWeatherData from "../../apis/fetchWeatherData";

const createWeatherDataSlice = (set) => ({
  weatherData: {},
  fetchWeather: async (placeName) => {
    const queryToFetch = placeName ? placeName : "Mostar";
    const fetchedData = await fetchWeatherData(queryToFetch);
    if (fetchedData) {
      set({ weatherData: fetchedData });
    }
  },
});

export default createWeatherDataSlice;
