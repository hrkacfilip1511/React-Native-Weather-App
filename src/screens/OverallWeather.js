import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import fetchWeatherData from "../apis/fetchWeatherData";
import MyIcon from "../UI/MyIcon";
import CurrentWeatherFeature from "../UI/CurrentWeatherFeature";

const OverallWeather = () => {
  const [fetchedData, setFetchedData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchWeatherData("Mostar");
      if (fetchedData) {
        setFetchedData(fetchedData);
      }
    };
    fetchData();
  }, []);

  return (
    fetchedData && (
      <>
        <View>
          <ImageBackground
            source={
              fetchedData.current.is_day === 1
                ? require("../../assets/day.jpg")
                : require("../../assets/night.jpg")
            }
            style={{ height: "100%" }}
          >
            <View style={styles.currentContainer}>
              <MyIcon iconName={fetchedData.current.condition.text} />
              <Text style={styles.placeName}>{fetchedData.location.name}</Text>
              <Text
                style={[
                  styles.weatherText,
                  fetchedData.current.is_day === 1
                    ? styles.fontBlack
                    : styles.fontWhite,
                ]}
              >
                {fetchedData.current.condition.text}
              </Text>
              <Text style={styles.temperature}>
                {fetchedData.current.temp_c}°
              </Text>
              <View style={styles.weatherFeatures}>
                <CurrentWeatherFeature
                  iconName="sun-wireless"
                  text={`UV  ${fetchedData.current.uv}`}
                  color="red"
                />
                <CurrentWeatherFeature
                  iconName="temperature-celsius"
                  text={
                    fetchedData.forecast.forecastday[0].day.mintemp_c +
                    "°" +
                    " / " +
                    fetchedData.forecast.forecastday[0].day.maxtemp_c +
                    "°"
                  }
                  color="white"
                />
                <CurrentWeatherFeature
                  iconName="windsock"
                  text={fetchedData.current.wind_kph + " kph"}
                  color={"white"}
                />
                <CurrentWeatherFeature
                  iconName="eye"
                  text={fetchedData.current.vis_km + " km"}
                  color={fetchedData.current.is_day === 1 ? "black" : "white"}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </>
    )
  );
};
const styles = StyleSheet.create({
  currentContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  placeName: {
    fontSize: 30,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "700",
    letterSpacing: 1.2,
    marginTop: 10,
  },
  weatherText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  fontWhite: { color: "white" },
  fontBlack: { color: "black" },
  temperatureBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  temperature: {
    fontSize: 50,
    color: "white",
    fontWeight: "700",
    letterSpacing: 1.2,
    marginTop: 50,
  },
  weatherFeatures: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default OverallWeather;
