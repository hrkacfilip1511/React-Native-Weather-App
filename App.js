import { createStackNavigator } from "@react-navigation/stack";
import { Pressable, StatusBar, StyleSheet } from "react-native";
import OverallWeather from "./src/screens/OverallWeather";
import DayWeatherDetails from "./src/screens/DayWeatherDetails";
import SearchPlace from "./src/screens/SearchPlace";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import useStore from "./src/store/useStore";
const Stack = createStackNavigator();

export default function App() {
  const fetchWeather = useStore((state) => state.fetchWeather);
  const currentWeatherPlace = useStore((state) => state.weatherData);
  const fetchWeatherData = () => {
    fetchWeather(currentWeatherPlace?.location?.name);
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Overall"
            component={OverallWeather}
            options={({ navigation }) => ({
              title: "",
              headerLeft: () => (
                <Pressable onPress={() => navigation.navigate("SearchPlace")}>
                  <Icon
                    name="search1"
                    size={25}
                    color={"black"}
                    style={styles.header}
                  />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={fetchWeatherData}>
                  <Icon
                    name="reload1"
                    size={25}
                    color={"black"}
                    style={styles.header}
                  />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen name="DayDetail" component={DayWeatherDetails} />
          <Stack.Screen name="SearchPlace" component={SearchPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 10,
  },
});
