import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, StyleSheet } from "react-native";
import OverallWeather from "./src/screens/OverallWeather";
import DayWeatherDetails from "./src/screens/DayWeatherDetails";
import SearchPlace from "./src/screens/SearchPlace";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
const Stack = createStackNavigator();

export default function App() {
  const fetchAgain = () => {
    //
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
                <Icon
                  name="search1"
                  size={25}
                  color={"black"}
                  style={styles.header}
                />
              ),
              headerRight: () => (
                <Icon
                  name="reload1"
                  size={25}
                  color={"black"}
                  style={styles.header}
                />

                // <MyIcon iconName="reload" clickHandler={fetchAgain} />;
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
